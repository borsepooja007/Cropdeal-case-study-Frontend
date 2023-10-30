import React from 'react'
import { Route,Switch } from "react-router-dom";
import FarmerList from "./FarmerList"
import DealerList from "./DealerList"
import CropList from './CropList';
import Logout from '../Logout';
export default function AdminController() {
    return (
        <div>
              <Route exact path="/FarmerList" >
            <FarmerList/>
        </Route>
        <Route exact path="/DealerList" >
            <DealerList/>
        </Route>
        <Route exact path="/CropList" >
            <CropList/>
        </Route>
        <Route exact path="/Logout" >
            <Logout/>
        </Route>
        </div>
    )
}
