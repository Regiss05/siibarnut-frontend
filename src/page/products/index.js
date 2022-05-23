import React, {useEffect, useState} from "react";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import ProductsSections from "./elements/productsSections";
import CategorieSection from "./elements/categorieSection";
import Discount from "../../Components/elements/discount/Discount";
import {useLocation} from "react-router-dom";

const Products=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])


    const location = useLocation();
    let dataCt=location?.state;
    const [categorie,setCategorie]=useState(dataCt?.id_cat)
    useEffect(()=>{
            if (dataCt){
                setCategorie(dataCt.id_cat)
                console.log("datac",dataCt)
            }
        },// eslint-disable-next-line
        [])
    return(
       <div>

           <CategorieSection setcategorie={(value)=> {
               setCategorie(value)
           }}/>
           <Discount/>
           <Container>
               <ProductsSections categorie={categorie}/>
           </Container>
           <Footer/>
       </div>
    )
}
export default Products;