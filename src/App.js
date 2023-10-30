import logo from './logo.svg';
import Login from './LoginController/Login';
import FarmerAddcrop from './CropdealComp/FarmerComp/FarmerAddcrop';
//import FirstMost from './FirstMost';
import Header from './Components/Header';
import Admin from './Components/Admin';
import AdminGetList from './Components/AdminGetList';
import AdminGetDealerList from './Components/AdminGetDealerList'




import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./CropdealComp/NavBar"
import {BrowserRouter} from "react-router-dom";
import "../src/index.css"
import './App.css';

function App() {
  return (

    
    <BrowserRouter>
    
    <NavBar/>
    </BrowserRouter>
    
  );
}

export default App;









 //   {/* <Header/>
    //   {/* <Admin/> */}
    //   {/* <AdminGetList/>
    //   <br/>
    //  <AdminGetDealerList/> */} 
