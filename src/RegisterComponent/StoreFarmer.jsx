import React from 'react'
import { useEffect,useState } from 'react';
import {NavLink} from "react-router-dom";

export default function StoreFarmer() {

    const[farmer_name, setFarmerName]=useState("");
    const[farmeremail, setFarmerEmail]=useState("");
    const[farmer_contactNo, setFarmerContactNo]=useState("");
    const[village, setVillage]=useState("");
    const[street, setStreet]=useState("");
    const[state, setState]=useState("");
    const[pincode, setPincode]=useState("");
    const[city, setCity]=useState("");
    const[ifsc_code, setIFSC]=useState("");
    const[bank_name, setBankName]=useState("");
    const[account_number, setAccountNo]=useState("");
    const[password, setPassword]=useState("");



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
      fetch("http://localhost:9001/api/findfarmer").then((result)=>{
        result.json().then((response)=>{
          //  console.warn(resp)
            setData(response)
        })
    })
    }



    function saveCrop()
    {
        let item={farmer_name,farmeremail,farmer_contactNo,password,farmer_address:{street,village,city,state,pincode},bank_details:{bank_name,account_number,ifsc_code}}
        console.warn(item);
        fetch("http://localhost:9001/api/addfarmer",{
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
        alert("Farmer Added");

        
    }
   

    return (
        <div >
            <div className="formContainer">
            <div >
                <h1 >Add Farmer</h1>
                <hr />
                <h4>Basic Detail:</h4>
                <div className="CenterItem">
                
                {/* <label htmlFor="">Farmer Name:     </label> */}
                <input type="text" value={farmer_name} onChange={(e)=>{setFarmerName(e.target.value)}} placeholder="Farmer Name" name="farmer_name" required/>
                <br/>
                <br />
                
                {/* <label htmlFor="">Farmer Email:     </label> */}
                <input type="email" value={farmeremail} onChange={(e)=>{setFarmerEmail(e.target.value)}} placeholder="Farmer Email" name="farmeremail" required/>
                <br/>
                <br />
                
                {/* <label htmlFor="">Farmer Contact No.:     </label> */}
                <input type="text" value={farmer_contactNo} onChange={(e)=>{setFarmerContactNo(e.target.value)}} placeholder="Farmer Contact No." name="farmer_contactNo" required/>
                <br/>
                <br />
                <hr />
                </div >
                <h4>Location: </h4>
               <div className="CenterItem">
                {/* <label htmlFor="">Street:     </label> */}
                <input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}} placeholder="Street" name="street" required/>
                <br/>
                <br />
                {/* <label htmlFor="">village:     </label> */}
                <input type="text" value={village} onChange={(e)=>{setVillage(e.target.value)}} placeholder="Village" name="village" required/>
                <br/>
                <br />
                {/* <label htmlFor="">city:     </label> */}
                <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="City" name="city" required/>
                <br/>
                <br />
                {/* <label htmlFor="">state:     </label> */}
                <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} placeholder="State" name="state" required/>
                <br/>
                <br />
                {/* <label htmlFor="">pincode:     </label> */}
                <input type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} placeholder="Pincode" name="pincode" required/>
                <br/>
                <br />
                </div>
                <hr />
                <h4>Bank Detail:</h4>
                <div className="CenterItem">
                {/* <label htmlFor="">Bank Name:     </label> */}
                <input type="text" value={bank_name} onChange={(e)=>{setBankName(e.target.value)}} placeholder="Bank Name" name="bank_name" required/>
                <br/>
                <br />
                
                {/* <label htmlFor="">Bank Account No.:     </label> */}
                <input type="text" value={account_number} onChange={(e)=>{setAccountNo(e.target.value)}} placeholder="Bank Account Number" name="account_number" required/>
                <br/>
                <br />
                
                {/* <label htmlFor="">Bank IFSC Code:     </label> */}
                <input type="text" value={ifsc_code} onChange={(e)=>{setIFSC(e.target.value)}} placeholder="IFSC CODE" name="ifsc_code" required/>
                <br/>
                <br />
                
                {/* <label htmlFor="">Add Password:     </label> */}
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Set Password" name="password" required/>
                <br/>
                </div>
                <hr />
                <div className="buttonAlign">
                <div className="backbutton">
                <NavLink exact activeClassName="active_class" class="nav-link"  to="/Register"><button className="btn btn-primary" > Cancel</button></NavLink>
                </div>

                <button onClick={saveCrop} className="btn btn-success" >Add Farmer</button>
        
                </div>
            </div>
  
        </div>

        </div>
    )
}
