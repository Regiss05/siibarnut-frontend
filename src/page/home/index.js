import React from "react";
import Header from "../../Components/global/Header";
import TopSection from "./elements/TopSection";
import {Container} from "reactstrap";
import Billboard from "./elements/Billboard";
import QuickLinks from "./elements/QuickLinks";
import Products from "./elements/products";

const Home=()=>{
    return(
        <div className="App">
            <Header/>
               <TopSection/>
            <QuickLinks/>
            <Products/>
        </div>
    )
}
export default Home;