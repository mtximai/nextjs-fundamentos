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
select  ticker,
        vl01 = sum(case when MONTH(dt_lan)=1 then vl_total else 0 end),
        vl02 = sum(case when MONTH(dt_lan)=2 then vl_total else 0 end),
        vl03 = sum(case when MONTH(dt_lan)=3 then vl_total else 0 end),
        vl04 = sum(case when MONTH(dt_lan)=4 then vl_total else 0 end),
        vl05 = sum(case when MONTH(dt_lan)=5 then vl_total else 0 end),
        vl06 = sum(case when MONTH(dt_lan)=6 then vl_total else 0 end),
        vl07 = sum(case when MONTH(dt_lan)=7 then vl_total else 0 end),
        vl08 = sum(case when MONTH(dt_lan)=8 then vl_total else 0 end),
        vl09 = sum(case when MONTH(dt_lan)=9 then vl_total else 0 end),
        vl10 = sum(case when MONTH(dt_lan)=10 then vl_total else 0 end),
        vl11 = sum(case when MONTH(dt_lan)=11 then vl_total else 0 end),
        vl12 = sum(case when MONTH(dt_lan)=12 then vl_total else 0 end),
        vl_total=SUM(vl_total)
from movimentacaoB3
where ind_ope in ('DIV','JCP','REN') and (YEAR(dt_lan) = 2021)
group by ticker
`;


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let lista
  let rs

  try {
    let pool = await sql.connect(config)
  
    let r = await pool.request()
              .input('ano', sql.Int, 2021)
              .query(s)

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
