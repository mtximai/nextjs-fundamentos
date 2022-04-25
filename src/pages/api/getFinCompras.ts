// 18/04/22

import { NextApiRequest, NextApiResponse } from 'next'
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);

const sql = require('mssql')

const mSqlserver = process.env.NEXT_PUBLIC_SQLSERVER

const config = {
  server: mSqlserver,
  port: 1433,
  user: 'sa1',
  password: 'sa2',
  database: 'ctb2021',
  options: {
    enableArithAbort: true,
    encrypt: false,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
}

const s = `
select * from compra
order by dt_compra,ticker
`;


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let lista
  let rs

  try {
    let pool = await sql.connect(config)
  
    let r = await pool.request().query(s)

    lista = r.recordset
    rs = JSON.stringify(lista)
  }
  catch (err) {
    console.log('erro', err)
  }

  res.setHeader('Content-Type', 'application/json');

  await pipeline(rs, res);
};

export default handler;
