// src/app/api/ehs/exportPDF/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/utils/prisma'
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

// Helper to read a file from /public and turn it into a data URI
function getImageDataURI(relativePath: string): string {
  const filePath = path.join(process.cwd(), 'public', relativePath)
  if (!fs.existsSync(filePath)) return ''
  const ext = path.extname(filePath).slice(1).toLowerCase()
  const mimeType =
    ext === 'png' ? 'image/png' :
    (ext === 'jpg' || ext === 'jpeg') ? 'image/jpeg' :
    ext === 'gif' ? 'image/gif' :
    'application/octet-stream'
  const buffer = fs.readFileSync(filePath)
  return `data:${mimeType};base64,${buffer.toString('base64')}`
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const startDate = searchParams.get('startDate')
    const endDate   = searchParams.get('endDate')

    const whereClause: any = {}
    if (startDate && endDate) {
      whereClause.date = { gte: new Date(startDate), lte: new Date(endDate) }
    }

    const deviations = await prisma.eHSDeviation.findMany({
      where: whereClause,
      orderBy: { date: 'desc' },
    })

    const html = generatePDFHTML(deviations)

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })

    const pdf = await page.pdf({
      format: 'A4',
      landscape: true,
      margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
    })

    await browser.close()

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="ehs-deviations-${startDate||'all'}-${endDate||'all'}.pdf"`,
      },
    })
  } catch (error) {
    console.error('PDF export error:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}

function generatePDFHTML(deviations: any[]): string {
  const rows = deviations.map(dev => {
    const beforeURI = dev.photographBefore
      ? getImageDataURI(dev.photographBefore)
      : ''
    const afterURI = dev.photographAfter
      ? getImageDataURI(dev.photographAfter)
      : ''
    const pendingDays = dev.complianceStatus === 'Closed'
      ? 0
      : Math.floor((Date.now() - new Date(dev.date).getTime())/(1000*60*60*24))

    return `
      <tr>
        <td>${dev.month}</td>
        <td>${new Date(dev.date).toLocaleDateString()}</td>
        <td>${dev.timeOfRound}</td>
        <td>${dev.location}</td>
        <td>${dev.responsibleDepartment}</td>
        <td>${dev.remarks}</td>
        <td>${dev.observations}</td>
        <td>${ beforeURI 
             ? `<img src="${beforeURI}" style="max-width:80px;max-height:80px;object-fit:cover"/>`
             : 'N/A' }</td>
        <td>${dev.controlMeasures}</td>
        <td>${ afterURI 
             ? `<img src="${afterURI}" style="max-width:80px;max-height:80px;object-fit:cover"/>`
             : 'N/A' }</td>
        <td>${pendingDays}</td>
        <td>${dev.categorization}</td>
        <td>${dev.remarksByDepartment||'N/A'}</td>
        <td>${dev.complianceStatus}</td>
      </tr>`
  }).join('')

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>EHS Deviation Report</title>
        <style>
          body { font-family: Arial, sans-serif; font-size:10px; }
          table { width:100%; border-collapse:collapse; }
          th, td {
            border:1px solid #ddd;
            padding:4px;
            text-align:left;
            vertical-align: middle; /* ← vertically center content */
          }
          th {
            background:#f2f2f2;
            font-weight:bold;
          }
          img {
            display:block;
            margin:auto;
          }
        </style>
      </head>
      <body>
        <h1 style="text-align:center">EHS Deviation Report</h1>
        <p style="text-align:center">Generated on: ${new Date().toLocaleString()}</p>
        <table>
          <thead>
            <tr>
              <th>Month</th><th>Date</th><th>Time</th><th>Location</th>
              <th>Dept</th><th>Remarks</th><th>Observations</th>
              <th>Photo Before</th><th>Control Measures</th><th>Photo After</th>
              <th>Pending Days</th><th>Categorization</th><th>Dept Remarks</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </body>
    </html>`
}
