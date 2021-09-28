// 204 No content
// 405 Method now allowed

// http://localhost:3000/api/clientes

export default function handler(req, res) {
   //res.status(200).send()

   if (req.method === 'GET') {
      handleGet(req, res)
   } else {
      res.status(405).send()
   }
}

function handleGet(req, res) {
   res.status(200).json({
      id: 3,
      nome: 'Maria',
      idade: 3334
   })
}