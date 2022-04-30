import React from "react";
import ContentLoader from "react-content-loader";
const ItemsLoader=()=>{
    return(
        <div className="col-md-3  mt-4">
            <div className="loaderCustom">
            <ContentLoader
                speed={2}
                viewBox="0 0 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                className=""
            >
                <rect x="0" y="60" rx="2" ry="2" width="100%" height="400" />
            </ContentLoader>
            </div>
        </div>
    )
}
const ProductLoader=({one})=>{
    return(
            !one
            ?
            <div className="row">
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
                <ItemsLoader/>
            </div>
            :
            <div className="row">
                <ItemsLoader/>
            </div>
    )
}
export default ProductLoader