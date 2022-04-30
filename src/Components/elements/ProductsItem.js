import React from "react";
import {ShoppingCart} from "react-feather";

const ProductsItem=({image,titre,prix,onClick,courte_desc})=>{
    return(
        <div className="col-xl-3 col-lg-3 col-6  mt-4 " onClick={onClick}>
            <div className="cardp">
                <div className="d-flex itemtop align-items-center justify-content-between px-2 ">
                    <span className=" fw-bold">{prix}$</span>
                  {/*  <button className="btn-add">
                        <ShoppingCart color="#ffffff"/>
                    </button>*/}
                </div>
                <div className="text-center overflow-hidden imgcont ">
                    <img src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid"  alt="imageprod"/>
                </div>
                <div className="px-2">
                    <div>
                        <button className="btn-add itemButton">
                            <ShoppingCart color="#ffffff"/>
                        </button>
                    </div>
                    <span className="titreProd">{titre}</span><br/>
                    <span className="descProduct">{courte_desc.substring(0,80)}...</span>
                 `
                </div>
            </div>
        </div>
    )
}
export default ProductsItem;