import React from "react";
import Header from "../../Components/global/Header";
import TopSection from "./elements/TopSection";
import QuickLinks from "./elements/QuickLinks";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";

const Home=()=>{
    return(
        <main className="">
            <Header/>
               <TopSection/>
            <QuickLinks/>
            <Products/>
            <Footer/>
        </main>
    )
}
export default Home;