import React from "react";
import { Route, Routes as AppRoutes,Navigate } from 'react-router-dom'
import {Routes as SiteRoutes} from "./routes/";
import "../assets/style/loader.css"
import {Spinner} from "reactstrap";

const Routes=()=>{
    return (
        <AppRoutes>
            {
                 SiteRoutes.map((item,index)=>{
                        const Component=item.component
                        return(
                            <Route  path={item.path} index={item.index} {...item.ind}   element={
                                <React.Suspense fallback={<Spinner>...Loader</Spinner>}>
                                    {<Component />}
                                </React.Suspense>
                            } key={index} />
                        )
                    })
                }
        </AppRoutes>
    )
}
export default Routes;