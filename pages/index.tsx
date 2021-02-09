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
