import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
const KEY = 'aslkfjasdfoaisdfalsdfal;sdfoasdifjf'

export default function (req:NextApiRequest,res:NextApiResponse){
    if(!req.body){
        req.statusCode = 404
        res.end('Error')
        return
    }
    const {username,password} = req.body
    //console.log(req.body)
    //res.json({message:"success"})
    res.json({
        token: jwt.sign(
            {
                username,
                admin: username==='admin' && password ==='admin'
            },
            KEY
        )
    })
}