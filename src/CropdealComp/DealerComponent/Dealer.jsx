import React from 'react'
import {useEffect,useState} from 'react'
import {NavLink} from "react-router-dom";

export default function () {

    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9003/api/admin/get/crop").then((result)=>{
            result.json().then((response)=>{
              //  console.warn(resp)
                setData(response)
            })
        })

       

    },[])

    console.warn(data)


    // function getList()
    // {
    //   fetch("http://localhost:9002/api/dealer/get/crop").then((result)=>{
    //     result.json().then((response)=>{
    //       //  console.warn(resp)
    //         setData(response)
    //     })
    // })
    // }




    return (
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">CropDeal</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
      <NavLink exact activeClassName="active_class" class="nav-link"  to="/">Home<span class="sr-only"></span></NavLink>
       {/*  <a class="nav-link" href="#">Home <span class="sr-only"></span></a> */}
      </li>      
      <li className="nav-item active">
      <NavLink exact activeClassName="active_class" class="nav-link"  to="/Payment">Payment<span class="sr-only"></span></NavLink>
       {/*  <a class="nav-link" href="#">Home <span class="sr-only"></span></a> */}
      </li>
     
      
     
    </ul>
    
  </div>
</nav>


           <div>
    <h1>Crop List</h1>
    <div>
        <table class="styled-table">
            <thead>
                <tr border="2px">
                    <th>Farmer Name</th>
                    <br />
                    <th>Crop Name</th>
                    <br />
                    <th>Quantity</th>
                    <br />
                    <th>Crop Type</th>
                    <br />
                    <th>Action</th>
                </tr>
            </thead>
            <br />
            {
                data.map((item)=>
                <tbody>
                    <tr>
                        {/* <td>{item.id}</td>
                        <br /> */}
                         <td>{item.uploaded_by}</td>
                        <br />
                        <td>{item.crop_name}</td>
                        <br />
                        <td>{item.crop_quantity}</td>
                        <br />
                        <td>{item.crop_type}</td>
                        <br />
                        <td>
                             <NavLink exact activeClassName="active_class" class="nav-link"  to="/Payment"><button className="btn btn-success"> Purchase</button></NavLink>
                        </td>
                    </tr>
                    
                    </tbody>
                    
                )
            }

        </table>
        </div>

</div>
           
        </div>
    )
}
