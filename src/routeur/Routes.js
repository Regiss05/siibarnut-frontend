import React from "react";
import { Route, Routes as AppRoutes, } from 'react-router-dom'
import {Routes as SiteRoutes} from "./routes/";
import Layout from "../layout";
import ProductLoader from "../Components/elements/productLoader";

const Load=()=>{
    return(
        <div className="col-12 ">
           <ProductLoader/>
        </div>
    )
}
const Routes=()=>{
    return (
        <AppRoutes>
            <Route path="/" element={<Layout/>}>
            {
                 SiteRoutes.map((item,index)=>{
                        const Component=item.component
                        return(
                            <Route  path={item.path} index={item.index} {...item.ind}   element={
                                <React.Suspense fallback={<Load/>}>
                                    {<Component />}
                                </React.Suspense>
                            } key={index} />
                        )
                    })
                }
            </Route>
        </AppRoutes>
    )
}
export default Routes;