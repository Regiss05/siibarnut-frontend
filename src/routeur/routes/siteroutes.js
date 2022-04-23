
import {lazy} from 'react'

const Siteroutes = [
    {
        ind:{
            index:true,
        },
        component: lazy(() => import('../../page/home/')),
        exact: true
    },

]

export default  Siteroutes;