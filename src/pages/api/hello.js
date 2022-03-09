// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 29/08/21 - curso react aula 98
// Testar com: http://localhost:3000/api/hello?nome=joao
//
export default function handler(req, res) {
  res.status(200).json({
    name: 'Teste API',
    metodo: req.method,
    nome: req.query.nome,
    params: JSON.stringify(req.query)
 })
}
