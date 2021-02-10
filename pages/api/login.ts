import { NextApiRequest, NextApiResponse } from "next";


export default function (req:NextApiRequest,res:NextApiResponse){
    console.log(req.body)
    res.json({message:"success"})
}