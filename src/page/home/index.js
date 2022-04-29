import React from "react";
import Header from "../../Components/global/Header";
import TopSection from "./elements/TopSection";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";

const Home=()=>{
    return(
        <div >
            <Header/>
            <Container>
                <TopSection/>
                <Products/>
            </Container>
            <Footer/>
        </div>
    )
}
export default Home;