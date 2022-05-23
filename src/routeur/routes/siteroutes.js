
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
    {
        path:"/produits",
        ind:{
            index:false,
        },
        component: lazy(() => import('../../page/products/')),
        exact: true
    },
    {
        path:"/card",
        ind:{
            index:false,
        },
        component: lazy(() => import('../../page/cart/')),
        exact: true
    },
    {
        path:"/checkout",
        ind:{
            index:false,
        },
        component: lazy(() => import('../../page/checkout/')),
        exact: true
    },
    {
        path:"/forgotpassword",
        ind:{
            index:false,
        },
        component: lazy(() => import('../../page/Resetpass/')),
        exact: true
    },

]

export default  Siteroutes;