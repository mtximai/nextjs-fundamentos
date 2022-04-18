import type { NextApiRequest, NextApiResponse } from 'next'

const sql = require('mssql')

const config = {
  server: 'localhost',
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

export default function Teste(req: NextApiRequest, res: NextApiResponse) {

  sql.connect(config).then(pool => {
    return pool.request()
        .input('input_parameter', sql.Int, 10)
        .query('select top 2 * from zCompra')
  }).then(result => {

    console.log(result.recorset)

    res.status(200).json(result.recorset)

  }).catch(err => {
    console.log(err)
    res.status(200).json({erro:"safasasf"})
  });

  //res.status(200).json({ name: 'John Doe' })
}
