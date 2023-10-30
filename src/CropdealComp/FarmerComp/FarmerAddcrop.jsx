import React from 'react'
import { useEffect,useState } from 'react';
import {NavLink} from "react-router-dom";
// import '../App.css'
export default function FarmerAddcrop() {

    const[crop_name, setCropName]=useState("");
    
    const[crop_quantity, setCropQuantity]=useState("");
    const[crop_type, setCropType]=useState("");
    const[street, setStreet]=useState("");
    const[village, setVillage]=useState("");
    const[city, setCity]=useState("");
    const[state, setState]=useState("");
    const[pincode, setPincode]=useState("");
    const[uploaded_by, setUploadedBy]=useState("");



    const [data, setData]=useState([])
    useEffect(()=>{
        // fetch("http://localhost:9003/api/admin/get/crop").then((result)=>{
        //     result.json().then((response)=>{
        //       //  console.warn(resp)
        //         setData(response)
        //     })
        // })

        getList()

    },[])

    console.warn(data)


    function getList()
    {
      fetch("http://localhost:9001/api/farmer/get/crop").then((result)=>{
        result.json().then((response)=>{
          //  console.warn(resp)
            setData(response)
        })
    })
    }



    function saveCrop()
    {
        let item={crop_name,crop_quantity,crop_type,location:{street,village,city,state,pincode},uploaded_by}
        console.warn(item);
        fetch("http://localhost:9001/api/farmer/add/crop",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            //console.warn("result",result);
            result.json().then((resp)=>{
                console.warn("reaponse",resp)
            })
        }
        )
        getList()
        alert("Crop Added");

        
    }

    return (
        <>
        <div >
        <div className="formContainer">
            <div >
                <h1 >Add Crop</h1>
                <hr />
                <h4>Basic Detail:</h4>
                <div className="CenterItem">
                {/* <label htmlFor="">Crop Name:     </label> */}
                <input type="text" value={crop_name} onChange={(e)=>{setCropName(e.target.value)}} name="crop_name" placeholder="Enter Crop Name" required/>
                <br/>
                <br />
                {/* <label htmlFor="">Crop Quantity:     </label> */}
                <input type="text" value={crop_quantity} onChange={(e)=>{setCropQuantity(e.target.value)}} name="crop_quantity" placeholder="Enter Crop Quantity" required/>
                <br/>
                <br />
                {/* <label htmlFor="">Crop Type:     </label> */}
                <input type="text" value={crop_type} onChange={(e)=>{setCropType(e.target.value)}} name="crop_type" placeholder="Enter Crop Type eg.Cereal" required/>
                <br/>
                <br />
                <br />
                </div>
                <hr />
                <h4>Location:</h4>
                <div className="CenterItem" >
                {/* <label htmlFor="">Street:     </label> */}
                <input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}} name="street" placeholder="Street" required/>
                <br/>
                <br />
                {/* <label htmlFor="">village:     </label> */}
                <input type="text" value={village} onChange={(e)=>{setVillage(e.target.value)}} name="village" placeholder="Village" required/>
                <br/>
                <br />
                {/* <label htmlFor="">city:     </label> */}
                <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" placeholder="City" required/>
                <br/>
                <br />
                {/* <label htmlFor="">state:     </label> */}
                <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} name="state" placeholder="State" required/>
                <br/>
                <br />
                {/* <label htmlFor="">pincode:     </label> */}
                <input type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} name="pincode" placeholder="Pincode" required/>
                <br/>
                <br />
                <br />
                </div>
                <hr />
                <h4>Uploaded by:</h4>
                <div className="CenterItem">
                {/* <label htmlFor="">Enter your name:     </label> */}
                <input type="text" value={uploaded_by} onChange={(e)=>{setUploadedBy(e.target.value)}} name="uploaded_by" placeholder="Enter Your Name"required/>
                <br/>
                </div>
                <hr />
                <div className="buttonAlign">
                <div className="backbutton">
                <NavLink exact activeClassName="active_class" class="nav-link"  to="/Farmer"><button className="btn btn-primary" > Cancel</button></NavLink>
                </div>
                <button onClick={saveCrop} className="btn btn-success">Add Crop</button>
                </div>
            </div>
  
        </div>


        <div>
        </div>

        

        </div>
        </>
    )
}
