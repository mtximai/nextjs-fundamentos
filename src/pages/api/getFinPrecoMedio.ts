// 18/04/22

import { NextApiRequest, NextApiResponse } from 'next'
import stream from 'stream';
import { promisify } from 'util';

const mEtcm = process.env.NEXT_PUBLIC_ETCM_URL

const pipeline = promisify(stream.pipeline);

const sql = require('mssql')

const config = {
  server: '10.20.1.73',
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
select id=ROW_NUMBER() OVER(ORDER BY ticker asc),
ticker, qtd=sum(qtd), vl_total=sum(vl_total), vl_medio=round(sum(vl_total)/sum(qtd),2), qt_compra=count(*)
from compra
group by ticker
order by 1
`;


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let lista
  let rs

  try {
    let pool = await sql.connect(config)
  
    let r = await pool.request()
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
