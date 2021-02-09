// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

export default function (req: NextApiRequest, res:NextApiResponse){
  res.json({ name: 'John Doe' })
}
