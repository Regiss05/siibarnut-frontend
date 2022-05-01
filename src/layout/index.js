import React from "react";
import Header from "../Components/global/Header";
import {Outlet} from "react-router-dom";

const Layout=(props)=>{
    return(
        <div>
            <Header/>
            <Outlet {...props}/>
        </div>
    )
}
export default Layout;