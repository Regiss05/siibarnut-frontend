import React from "react";
import { Route, Routes as AppRoutes, } from 'react-router-dom'
import {Routes as SiteRoutes} from "./routes/";
import Layout from "../layout";
import ProductLoader from "../Components/elements/productLoader";
import {Container} from "reactstrap";
import Forgotpasswordmobil from "../page/forgotpasswordmobil";
import {E404} from "../page/error";

const Load=()=>{
    return(
        <Container>
            <ProductLoader/>
        </Container>

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
            <Route path="/forgotpasswordmobil" element={<Forgotpasswordmobil/>}/>
            <Route path="*" element={<E404/>}/>
        </AppRoutes>
    )
}
export default Routes;