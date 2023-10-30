import React ,{useState} from 'react'

export default function () {
    const [admin_email, setAdmin_email]=useState("")
    const [password, setPassword]=useState("")

    async function signup(){
        
        let item={admin_email, password}
        console.warn(item)

      let result= await  fetch("http://localhost:9003/api/addadmin" ,{ 

            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })

        result=await result.json()
        console.warn("result",result)
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Admin List</h1>
            <input type="text" value={admin_email} onChange={(e)=>setAdmin_email(e.target.value)} className="form-control" placeholder="Email"/>
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
            <br />
            <button onClick={signup} className="btn btn-primary">Sign up</button>

        </div>
    )
}
