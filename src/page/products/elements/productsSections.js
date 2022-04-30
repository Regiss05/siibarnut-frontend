import React, {useEffect, useState} from "react";
import "../../../Styles/productCss.css"
import ProductsItem from "../../../Components/elements/ProductsItem";
import axios from "axios";
import ProductLoader from "../../../Components/elements/productLoader";
import {Link, useNavigate} from "react-router-dom";

const ProductsSections = () => {
    const [produits,setProducts]=useState(null)
    const [isLog, setislog] = useState(false);
    const history = useNavigate();

    const getProducts=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/product" ,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        axios(options)
            .then(response => {
                setislog(false)
                if (response.data.status===200){
                    console.log(response.data)
                    setProducts(response.data?.data);
                }else {
                    alert(response?.data?.message,"Erreur")
                }
            })
            .catch(err => {
                setislog(false)
                console.log(err.response);
                alert("Problème de connexion","Erreur")
            });
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3"><span>Nos Produits</span>
            </div>
            {
                isLog
                    ?
                    <div className="row">
                        <ProductLoader/>
                    </div>
                    :
                <div className="row">

                {
                    produits
                        ?
                        produits.map((item, index) => <ProductsItem prix={item.Prix_unitaire} courte_desc={item.Courte_Description} titre={item.designation} image={item.img_princ}  onClick={() => history( "/produit", {state: item})} key={index}  />)
                        :
                        null
                }

            </div>}
        </div>
    )
}
export default ProductsSections;