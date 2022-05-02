import React from "react";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import ProductsSections from "./elements/productsSections";
import CategorieSection from "./elements/categorieSection";
import Discount from "../../Components/elements/discount/Discount";

const Products=()=>{
    return(
       <div>
           <Discount/>
           <CategorieSection/>
           <Container>
               <ProductsSections/>
           </Container>
           <Footer/>
       </div>
    )
}
export default Products;