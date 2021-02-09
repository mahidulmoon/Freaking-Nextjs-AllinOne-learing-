import { rootCertificates } from "tls"


function Home(props) {
  return(
    <div>
      <h1 className="title">{props.text}</h1>
      <style jsx>
          {`
            .title{
              color: red;
            }
          `}
      </style>
    </div>
  )
}


export default function Major(){
  return(
    <div>
        <Home text="Hello mother fucker" />
    </div>
  )
}
