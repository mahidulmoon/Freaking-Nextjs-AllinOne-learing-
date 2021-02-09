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
