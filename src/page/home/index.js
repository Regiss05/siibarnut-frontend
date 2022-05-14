import React, {useEffect} from "react";
import TopSection from "./elements/TopSection";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import Discount from "../../Components/elements/discount/Discount";
import Wrapper from "../../Components/elements/wrapper/Wrapper";
import CategorieSection from "./elements/categorieSection";

const Home=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return(
        <div >
            <Container>
                <TopSection/>
            </Container>
                <Discount/>
            <CategorieSection/>
                <Container>
                <Products/>
            </Container>
            <Wrapper/>
            <Footer/>
        </div>
    )
}
export default Home;