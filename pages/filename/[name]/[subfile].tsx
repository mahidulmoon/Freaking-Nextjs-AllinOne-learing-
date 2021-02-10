import {useRouter} from 'next/router'

export default function FilaName(){

    const router = useRouter()
    return <h1>Dynamic routing is working.path:{router.query.name}/{router.query.subname}</h1>
}

//http://localhost:3000/filename/abc/123 -> working 
//http://localhost:3000/filename/abc/ -> 404