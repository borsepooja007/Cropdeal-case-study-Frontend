import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../image/cropdeal.jpeg';
import {NavLink} from "react-router-dom";
import '../App.css'

export default function Register() {
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
     
      <li class="nav-item">
      <NavLink exact activeClassName="active_class" className="nav-link" to="/StoreDealer">Register Dealer</NavLink>
      </li>
      <li class="nav-item">
      <NavLink exact activeClassName="active_class" class="nav-link" to="/StoreFarmer">Register Farmer</NavLink>
      </li>
      
     
      
     
    </ul>
    
  </div>
</nav>

<img src= {img1} alt="Cropdeal image" />
        </div>
    )
}
