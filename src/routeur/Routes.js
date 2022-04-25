import React from "react";
import { Route, Routes as AppRoutes, } from 'react-router-dom'
import {Routes as SiteRoutes} from "./routes/";

const Routes=()=>{
    return (
        <AppRoutes>
            {
                 SiteRoutes.map((item,index)=>{
                        const Component=item.component
                        return(
                            <Route  path={item.path} index={item.index} {...item.ind}   element={
                                <React.Suspense fallback={<div></div>}>
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