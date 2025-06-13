// src/lib/db.ts
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: '192.168.24.8',
  user: 'arya.khadgi',
  password: '1289M#*u',
  database: 'bosch_cv_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
