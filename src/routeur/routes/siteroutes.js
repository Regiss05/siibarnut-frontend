
import {lazy} from 'react'

const Siteroutes = [
    {
        ind:{
            index:true,
        },
        component: lazy(() => import('../../page/home/')),
        exact: true
    },
    {
        path:"/produit",
        ind:{
            index:false,
        },
        component: lazy(() => import('../../page/detailProduct/')),
        exact: true
    },

]

export default  Siteroutes;