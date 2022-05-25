// Retorna um PDF v2 - 24/05/2022
// Chrome abre o pdf em uma aba

import fs from 'fs'

export default function handler(req, res) {
  
  var data =fs.readFileSync('./public/sample.pdf');

  res.setHeader('Content-Type', 'application/pdf');
  res.send(data);
}
