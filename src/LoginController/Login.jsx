import React from 'react'
import {NavLink} from "react-router-dom";
export default function Login() {
    return (
        <div>
            

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
            
            </ul>
            
          </div>
        </nav>
        </div>

        <h1>Login Page</h1>
        
        </div>
    )
}
