'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href?: string;
  icon: string;
  label: string;
  children?: NavItem[];
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const path = usePathname();

  const navItems: NavItem[] = [
    { href: '/', icon: '🏠', label: 'Home' },
    
    {
      icon: '🛠️',
      label: 'Maintenance',
      children: [
        { href: '/maintenance/shop-issue', icon: '📝', label: 'Shop Issue' },
      ],
    },
    
      {
    icon: '🛡️',
    label: 'EHS',
    children: [
      { href: '/ehs/report-deviation', icon: '📋', label: 'Report Deviation' },
    ],
  },

    {
      icon: '⚙️',
      label: 'Operations',
      children: [
        { href: '/operations/manual-warehouse', icon: '📤', label: 'MWarehouse Scan' },
        { href: '/operations/tray-finder', icon: '🧭', label: 'Tray Finder' },
        { href: '/operations/tray-scanner', icon: '🔍', label: 'Tray Scanner' },
        { href: '/operations/excel-upload', icon: '📄', label: 'Excel Upload' },
        
      ],
    },

    {
      icon: '📦',
      label: 'Packing Dispatch',
      children: [
        { href: '/packing-dispatch/packing', icon: '📦', label: 'Packing Scans' },
        { href: '/packing-dispatch/dispatch', icon: '🚚', label: 'Dispatch Scans' },
        { href: '/packing-dispatch/fr0', icon: '👓', label: 'FR0 Scans' },
        { href: '/packing-dispatch/bulk', icon: '🛒', label: 'Bulk Scans' },
        { href: '/packing-dispatch/upload', icon: '📁', label: 'Excel Upload' },
      ],
    },
    
    {
      icon: '🙏',
      label: 'Appreciation',
      children: [
        { href: '/appreciation', icon: '📝', label: 'Appreciation Wall' },
      ],
    },

  ];

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className={`
        ${collapsed ? 'w-16' : 'w-64'}
        bg-gray-800 text-white transition-all duration-300 flex flex-col
      `}
    >
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="p-4 focus:outline-none"
      >
        ☰
      </button>

      <nav className="mt-4 flex-1 overflow-auto">
        {navItems.map((item) => {
          if (item.href) {
            const isActive = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center px-4 py-2 rounded
                  ${isActive ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'}
                  transition
                `}
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </Link>
            );
          }

          const isOpen = openSections[item.label] ?? true;

          return (
            <div key={item.label} className="mt-2">
              <button
                onClick={() => toggleSection(item.label)}
                className="w-full flex items-center px-4 py-2 font-semibold hover:bg-gray-700 transition"
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="ml-2 flex-1 text-left">{item.label}</span>
                    <span>{isOpen ? '▾' : '▸'}</span>
                  </>
                )}
              </button>

              {!collapsed && isOpen && (
                <ul className="ml-8">
                  {item.children!.map((child) => {
                    const isActive = path === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href!}
                          className={`
                            flex items-center px-4 py-2 rounded
                            ${isActive ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'}
                            transition
                          `}
                        >
                          <span className="text-lg">{child.icon}</span>
                          <span className="ml-2">{child.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
