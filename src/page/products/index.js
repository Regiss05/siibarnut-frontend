import React, {useEffect, useState} from "react";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import ProductsSections from "./elements/productsSections";
import CategorieSection from "./elements/categorieSection";
import Discount from "../../Components/elements/discount/Discount";

const Products=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const [categorie,setCategorie]=useState(null)
    return(
       <div>
           <Discount/>
           <CategorieSection setcategorie={(value)=> {
               setCategorie(value)
           }}/>
           <Container>
               <ProductsSections categorie={categorie}/>
           </Container>
           <Footer/>
       </div>
    )
}
export default Products;