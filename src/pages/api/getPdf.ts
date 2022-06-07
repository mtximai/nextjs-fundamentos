 // Chrome baixa o pdf - 24/05/2022

 import fs from 'fs'

export default function handler(req, res) {

  var file = fs.createReadStream('./public/sample.pdf');
  var stat = fs.statSync('./public/sample.pdf');

  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');

  file.pipe(res);

}

