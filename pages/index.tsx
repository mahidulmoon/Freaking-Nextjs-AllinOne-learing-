import { rootCertificates } from "tls"
import {useState} from "react"
import jwt from 'jsonwebtoken'

function Home(props) {
  const [username,setUsername] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const variable = Math.random() >.5 ? 'red' : 'blue'
  const [message,setMessage] = useState<string>('')
  async function submitForm(){
    const res = await fetch('api/login',{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({username,password})
    }).then((t) => t.json())
    const token = res.token
    if(token){
      const json = jwt.decode(token)
      setMessage(`welcom ${json.username} and you are ${json.admin ? 'an admin' : 'not an admin'}`)
    }else{
      setMessage("something went wrong")
    }
  }
  return(
    <div>
      <h1>{message}</h1>
      <h1 className="title">{props.text}</h1>
      <style jsx>
          {`
            .title{
              color: ${variable};
            }
          `}
      </style>
      <h2 className="custom">This is to test from golbal css file</h2>

      <form>
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        <br />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <input type="button" value="login" onClick={submitForm} />
      </form>
    </div>
  )
}


export default function Main(){
  return(
    <div>
        <Home text="Hello mother fucker" />
    </div>
  )
}
