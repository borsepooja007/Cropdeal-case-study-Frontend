import React, {useEffect,useState} from 'react'

export default function AdminGetDealerList() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9003/api/admin/get/dealer").then((result)=>{
            result.json().then((response)=>{
              //  console.warn(resp)
                setData(response)
            })
        })

    },[])

    console.warn(data)

    return (
        <div>
           

           <div>

        

<div>
    <h1>Get Dealer List</h1>
    <button>Get</button>
    <div>
        <table border="2px">
            <tr border="2px">
                <th>id</th>
                <br />
                <th>Name</th>
                <br />
                <th>Email</th>
                <br />
                <th>Contact No</th>
                <br />
                <th>Action</th>

            
            </tr>
            <br />
            {
                data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <br />
                        <td>{item.dealer_name}</td>
                        <br />
                        <td>{item.dealer_email}</td>
                        <br />
                        <td>{item.dealer_contactNo}</td>
                        <br />
                        <button>Delete</button>
                    </tr> 
                    
                )
            }

         </table>

    </div>
</div>

           </div>
        </div>



        
    )
}
