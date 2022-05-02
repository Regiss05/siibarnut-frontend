import React from "react";
import TopSection from "./elements/TopSection";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import Discount from "../../Components/elements/discount/Discount";
import Wrapper from "../../Components/elements/wrapper/Wrapper";

const Home=()=>{
    return(
        <div >
            <Container>
                <TopSection/>
            </Container>
                <Discount/>
                <Container>
                <Products/>
            </Container>
            <Wrapper/>
            <Footer/>
        </div>
    )
}
export default Home;