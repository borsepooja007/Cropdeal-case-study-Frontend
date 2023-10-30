import React from 'react'
import { useEffect,useState } from 'react';
import {NavLink} from "react-router-dom";

export default function StoreDealer() {

    const[dealer_name, setDealerName]=useState("");
    const[ifsc_code, setIFSC]=useState("");
    const[bank_name, setBankName]=useState("");
    const[account_number, setAccountNo]=useState("");
    const[dealer_email, setDealerEmail]=useState("");
    const[dealer_contactNo, setDealerContactNo]=useState("");
    const[crop_name, setCropName]=useState("");
    const[crop_type, setCropType]=useState("");
    const[password, setPassword]=useState("");
    const[card_number, setCardNo]=useState("");
    const[card_type, setCardType]=useState("");
    const[cvv, setCvv]=useState("");


    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     // fetch("http://localhost:9003/api/admin/get/crop").then((result)=>{
    //     //     result.json().then((response)=>{
    //     //       //  console.warn(resp)
    //     //         setData(response)
    //     //     })
    //     // })

    //     getList()

    // },[])

    // console.warn(data)


    // function getList()
    // {
    //   fetch("http://localhost:9002/api/finddealer").then((result)=>{
    //     result.json().then((response)=>{
    //       //  console.warn(resp)
    //         setData(response)
    //     })
    // })
    // }

    function saveCrop()
    {
        let item={dealer_name,dealer_email,dealer_contactNo,password,bank_details:{bank_name,account_number,ifsc_code},dealer_Subscribed_Crop:{crop_name,crop_type},payment_method:{card_number,card_type,cvv}}
        console.warn(item);
        fetch("http://localhost:9002/api/adddealer",{
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
        
        alert("Dealer Added");

        
    }



    return (
        <div >
            <div>
            <div className="formContainer">
            <div >
                <h1 lass="formHeader">Add Dealer</h1>
                <hr />
               <h4>Basic Detail:</h4>
               <div className="CenterItem">
                {/* <label htmlFor="">Dealer Name:    </label> */}
                <input type="text" value={dealer_name} onChange={(e)=>{setDealerName(e.target.value)}} placeholder="Name" name="dealer_name" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Dealer Email:    </label> */}
                <input type="email" value={dealer_email} onChange={(e)=>{setDealerEmail(e.target.value)}} placeholder="Email" name="dealer_email" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Dealer Contact No.:    </label> */}
                <input type="text" value={dealer_contactNo} onChange={(e)=>{setDealerContactNo(e.target.value)}} placeholder="Contact No" name="dealer_contactNo" required/>
                <br/>
                <br/>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" required/>
                <br/>
                
                </div>
                <hr />
                <h4>Bank Detail:</h4>
                <div className="CenterItem">
               
                {/* <label htmlFor="">Bank Name:    </label> */}
                <input type="text" value={bank_name} onChange={(e)=>{setBankName(e.target.value)}} placeholder="Bank Name" name="bank_name" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Bank Account No.:    </label> */}
                <input type="text" value={account_number} onChange={(e)=>{setAccountNo(e.target.value)}} placeholder="Bank Account Name" name="account_number" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Bank IFSC Code:    </label> */}
                <input type="text" value={ifsc_code} onChange={(e)=>{setIFSC(e.target.value)}} placeholder="Bank IFSC Code" name="ifsc_code" required/>
                <br/>
                <br/>
                </div>
                <hr />
                <h4>Card Details:</h4>
                <div className="CenterItem">
                {/* <label htmlFor="">Card Number:    </label> */}
                <input type="text" value={card_number} onChange={(e)=>{setCardNo(e.target.value)}}  placeholder="Card Number" name="card_number"  required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Bank Type:    </label> */}
                <input type="text" value={card_type} onChange={(e)=>{setCardType(e.target.value)}} placeholder="Card Type" name="card_type" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Card cvv:    </label> */}
                <input type="text" value={cvv} onChange={(e)=>{setCvv(e.target.value)}} placeholder="Card Cvv" name="cvv" required/>
                <br/>
                <br/>
                <br/>
                </div>
                </div>
                <hr />
                <h4>Subscribed Crop Details:</h4>
                <br />
                <div className="CenterItem">
                {/* <label htmlFor="">Crop Name:    </label> */}
                <input type="text" value={crop_name} onChange={(e)=>{setCropName(e.target.value)}} placeholder="Crop Name" name="crop_name" required/>
                <br/>
                <br/>
                {/* <label htmlFor="">Crop Type:    </label> */}
                <input type="text" value={crop_type} onChange={(e)=>{setCropType(e.target.value)}} placeholder="Crop Type" name="crop_type" required/>
                <br/>
                <br />
                {/* <label htmlFor="">Add Password:    </label> */}
               
                </div>
                <hr />
                <br/>
                <div className="buttonAlign">
                <div className="backbutton">
                <NavLink exact activeClassName="active_class" class="nav-link"  to="/Register"><button className="btn btn-primary" > Cancel</button></NavLink>
                </div>
                <button onClick={saveCrop} className="btn btn-success">Add Dealer</button>
                </div>
            </div>
  
        </div>

        </div>
        
    )
}
