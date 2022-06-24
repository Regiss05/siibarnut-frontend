import React, {useContext, useEffect, useState} from "react";
import "../../../Styles/productCss.css"
import ProductsItem from "../../../Components/elements/ProductsItem";
import axios from "axios";
import ProductLoader from "../../../Components/elements/productLoader";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {CardContext} from "../../../context/cart";

const ProductsSections = () => {
    const [isLog, setislog] = useState(false);
    const {favoriItem,isLogFav}=useContext(CardContext);
    const produits=favoriItem
    const history = useNavigate();


    useEffect(()=>{
        //getFavoritProd();
    },[])
    return (
        <div className="container mt-2 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3"><span>Mes Favoris</span></div>
            {
                isLogFav===true
                    ?
                    <div className="row">
                        <ProductLoader/>
                    </div>
                    :
                    <div className="row">

                        {
                            produits
                                ?
                                produits.map((item, index) => <ProductsItem
                                    prix={item.Prix_unitaire} courte_desc={item.Courte_Description}
                                    titre={item.designation} image={item.img_princ}
                                    prix_solde={item.prix_de_Solde}
                                    onClick={() => history(`/produit/${item.id_produits}`)}
                                    key={index}
                                />)
                                :
                                null
                        }

                    </div>}
        </div>
    )
}
export default ProductsSections;