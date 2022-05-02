import React from "react";
import Header from "../Components/global/Header";
import {Outlet} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout=(props)=>{
    return(
        <div>
            <Header/>
            <Outlet {...props}/>
            <ToastContainer />
        </div>
    )
}
export default Layout;