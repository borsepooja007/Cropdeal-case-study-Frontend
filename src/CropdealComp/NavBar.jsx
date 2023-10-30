import React from "react";
import { Route,Switch } from "react-router-dom";
import Admin from "./AdminComponenet/Admin";
import Farmer from "./FarmerComp/Farmer";
import Dealer from "./DealerComponent/Dealer";
import Error from "./Error";
import Menu from "./Menu"
import Home from "./Home";
import Login from "../LoginController/Login";
import Register from "../RegisterComponent/Register"
import AdminController from "./AdminComponenet/AdminController";
import FarmerAddcrop from "./FarmerComp/FarmerAddcrop";
import StoreDealer from "../RegisterComponent/StoreDealer"
import StoreFarmer from "../RegisterComponent/StoreFarmer"

//import index from "../Node.jsPaytmIntegration-master/index"
import Payment from "./DealerComponent/Payment";
const NavBar = () =>{
    return (
        <>
            <Menu/>
           
        {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/Admin">{Admin}</Route>
            <Route  path="/farmer" component={Farmer}/>
            <Route  path="/Dealer" component={Dealer}/>
            <Route component={Error}/>
        </Switch> */}
        <Route exact path="/" >
            <Home/>
        </Route>
        <Route exact path="/Admin" >
            <Admin/>
        </Route>
        <Route exact path="/Farmer" >
            <Farmer/>
        </Route>
        <Route exact path="/Dealer" >
            <Dealer/>
        </Route>
        <Route exact path="/Login" >
            <Login/>
        </Route>
        <Route exact path="/Register" >
            <Register/>
        </Route>
        <Route exact path="/FarmerAddcrop" >
            <FarmerAddcrop/>
        </Route>

        <Route exact path="/Payment" >
            <Payment/>
        </Route>
        <Route exact path="/StoreDealer" >
            <StoreDealer/>
        </Route>
        <Route exact path="/StoreFarmer" >
            <StoreFarmer/>
        </Route>


        <AdminController/>
        {/* <Admin/>
        <Farmer/>
        <Dealer/> */}

        </>
    );
};

export default NavBar;