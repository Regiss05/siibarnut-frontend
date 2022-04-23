import React from "react";

const ProductsItem=({})=>{
    return(
        <div className="col-md-3  mt-4">
            <div className="card">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center time">
                        <span className="text-success">$200 </span></div>
                    <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt="imageprod"/>
                </div>
                <div className="text-center overflow-hidden">
                    <img src="https://i.imgur.com/TbtwkyW.jpg" className="img-fluid"  alt="imageprod"/></div>
                <div className="text-center">
                    <h5>Amazon Echo</h5>

                </div>
            </div>
        </div>
    )
}
export default ProductsItem;