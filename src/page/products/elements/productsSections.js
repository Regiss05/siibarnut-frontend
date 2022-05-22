import React, {useEffect, useState} from "react";
import "../../../Styles/productCss.css"
import ProductsItem from "../../../Components/elements/ProductsItem";
import axios from "axios";
import ProductLoader from "../../../Components/elements/productLoader";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const ProductsSections = ({categorie}) => {
    const [produits,setProducts]=useState(null)
    const [isLog, setislog] = useState(false);
    const filter=categorie?"&categorie="+categorie:""
    const history = useNavigate();

    const getProducts=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/product?ofset=68"+filter ,
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
                    toast.error(response?.data?.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setProducts(null)
                }
            })
            .catch(err => {
                setislog(false)
                console.log(err.response);
                if (err.response){
                    if (err.response.data.status===404){
                        console.log(err.response.data)
                        setProducts(null)
                        toast.error(err?.response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }else {
                        toast.error(err?.response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                }else {

                    toast.error('Problème de connexion', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    }

    useEffect(()=>{
        // eslint-disable-next-line
        getProducts();
    }, // eslint-disable-next-line
        [])
    useEffect(()=>{
        getProducts();
    },
        // eslint-disable-next-line
        [categorie]
    )
    return (
        <div className="container mt-1 mb-5">
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
                        produits.map((item, index) => <ProductsItem prix={item.Prix_unitaire} courte_desc={item.Courte_Description} titre={item.designation} image={item.img_princ} prix_solde={item.prix_de_Solde}  onClick={() => history( "/produit", {state: item})} key={index}  />)
                        :
                        null
                }

            </div>}
        </div>
    )
}
export default ProductsSections;