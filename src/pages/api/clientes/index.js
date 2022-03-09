// 204 No content

// http://localhost:3000/api/clientes

export default function handler(req, res) {
   //res.status(200).send()
   
   if (req.method === 'GET') {
      f_handleGet(req, res)
   } else {
      // 405 Method now allowed
      res.status(405).send()
   }
}

function f_handleGet(req, res) {
   res.status(200).json({
      id: 3,
      nome: 'Maria',
      idade: 3334
   })
}