// Mauro - 08/03/22
// Tipando o response

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function Teste(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
