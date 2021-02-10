import { rootCertificates } from "tls"


function Home(props) {
  const variable = Math.random() >.5 ? 'red' : 'blue'
  return(
    <div>
      <h1 className="title">{props.text}</h1>
      <style jsx>
          {`
            .title{
              color: ${variable};
            }
          `}
      </style>
      <h2 className="custom">This is to test from golbal css file</h2>

      <form method="POST" action="api/login">
        <input type="text" name="username" value="admin" />
        <br />
        <input type="password" name="password" value="admin" />
        <br />
        <input type="submit" value="login" />
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
