import React from "react";
import "../../../Styles/productCss.css"
import ProductsItem from "../../../Components/elements/ProductsItem";

const Products = () => {
    const produits=[
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
        {
            "nom":"Amazon Echo",
            "image":"https://i.imgur.com/suuFVrQ.png"
        },
    ];
    return (
        <div className="container mt-5 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3"><span>Nos Produits</span>
                <span className="custom-badge text-uppercase">Voir plus</span></div>
            <div className="row">

                {
                    produits.map((item,index)=> <ProductsItem/>)
                }

            </div>
        </div>
    )
}
export default Products;