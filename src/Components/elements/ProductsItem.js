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
                    <span className=" fw-bold"> - {getDiscout(prix,prix_solde)} %</span>
                </div>
                    :
                null
                }
                <div className="text-center overflow-hidden imgcont ">
                    <img src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid"  alt="imageprod"/>
                </div>
                <div className="px-2 d-flex flex-column">
                    <span className="titreProd">{titre}</span>
                    <span className="descProduct">{courte_desc.substring(0,80)}...</span>
                    {
                        prix_solde > 0
                            ?
                            <div className="d-flex  align-items-center justify-content-start gap-3 px-2 ">
                                <span className="prixProd2">{prix} $</span>
                                <span className="prixProd">{prix_solde} $</span>
                            </div>
                            :
                            <span className="prixProd">{prix} $</span>
                    }

                </div>
            </div>
        </div>
    )
}
export default ProductsItem;