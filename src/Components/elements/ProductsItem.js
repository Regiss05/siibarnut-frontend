import React from "react";

const ProductsItem=({image,titre,prix,onClick,courte_desc,prix_solde})=>{
    const getDiscout=(prix,discount)=>{
        if (prix && discount){
            var discountP=(discount * 100)/prix
            return 100-discountP
        }else {
            return 0;
        }
    }
    return(
        <div className="col-xl-3 col-lg-3 col-6  mt-4 " onClick={onClick}>
            <div className="cardp">
                {
                    prix_solde > 0
                        ?
                    <div className="d-flex itemtop2 align-items-center justify-content-between px-2 ">
                    <span className=" fw-bold">{prix}$ - {getDiscout(prix,prix_solde)} %</span>
                </div>
                    :
                    <div className="d-flex itemtop align-items-center justify-content-between px-2 ">
                    <span className=" fw-bold">{prix}$</span>
                </div>
                }
                <div className="text-center overflow-hidden imgcont ">
                    <img src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid"  alt="imageprod"/>
                </div>
                <div className="px-2">
                    <span className="titreProd">{titre}</span><br/>
                    <span className="descProduct">{courte_desc.substring(0,80)}...</span>
                </div>
            </div>
        </div>
    )
}
export default ProductsItem;