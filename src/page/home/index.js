import React from "react";
import Header from "../../Components/global/Header";
import TopSection from "./elements/TopSection";
import QuickLinks from "./elements/QuickLinks";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";

const Home=()=>{
    return(
        <div >
            <Header/>
               <TopSection/>
            <QuickLinks/>
            <Products/>
            <Footer/>
        </div>
    )
}
export default Home;