import React, {useEffect,useState} from 'react'

export default function AdminGetList() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9003/api/findadmin").then((result)=>{
            result.json().then((response)=>{
              //  console.warn(resp)
                setData(response)
            })
        })

    },[])

    console.warn(data)
   
    return (

        

        <div>
            <h1>Get Admin List</h1>
            <button>Get</button>
            <div>
                <table border="2px">
                    <tr border="2px">
                        <th>id</th>
                        <th>Email</th>
                        <th>password</th>
                    
                    </tr>
                    <br />
                    {
                        data.map((item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.admin_email}</td>
                                <td>{item.password}</td>
                            </tr> 
                            
                        )
                    }

                 </table>

            </div>
        </div>
    )
}
