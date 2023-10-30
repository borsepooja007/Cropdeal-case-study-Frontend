import React from 'react'
import {useEffect,useState} from 'react'
//import '.../App.css';
import {NavLink} from "react-router-dom";

export default function () {

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
        
        <>

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
             
              <li class="nav-item">
              <NavLink exact activeClassName="active_class" className="nav-link" to="/FarmerList">Farmer List</NavLink>
              </li>
              <li class="nav-item">
              <NavLink exact activeClassName="active_class" class="nav-link" to="/DealerList">Dealer List</NavLink>
              </li>
              <li class="nav-item">
              <NavLink exact activeClassName="active_class" class="nav-link" to="/CropList">Crop List</NavLink>
              </li>
             
              {/* <li class="nav-item">
                <NavLink class="nav-link" to="/Logout">Logout</NavLink>
              </li> */}
             
            </ul>
            
          </div>
        </nav>
        
      
        <h1 className="Admin">Welcome Admin!!!</h1>
               
            
        

{/* <div>
    <h1>Admin List</h1>
    <div>
        <table class="styled-table">
            <thead>
                <tr border="2px">
                    <th>id</th>
                    <br />
                    
                    <th>Email</th>
                    <br />
                    
                    <th>Action</th>
                </tr>
            </thead>
            <br />
            {
                data.map((item)=>
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <br />
                        <td>{item.admin_email}</td>
                        <br />
                        <td><button>Delete</button></td>
                    </tr>
                    
                    </tbody>
                    
                )
            }

        </table>
        </div>

</div> */}


</> 
    )
}
