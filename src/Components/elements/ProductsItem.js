import React from "react";
import {ShoppingCart} from "react-feather";

const ProductsItem=({image,titre,prix,onClick})=>{
    return(
        <div className="col-md-3  mt-4" onClick={onClick}>
            <div className="card">
                <div className="text-center overflow-hidden ">
                    <img src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid"  alt="imageprod"/></div>
                <div className="text-center">
                    <h5>{titre}</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between ">
                    <span className="text-success fw-bold">{prix}$</span>
                    <button className="btn-add">
                        <ShoppingCart color="#ffffff"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductsItem;