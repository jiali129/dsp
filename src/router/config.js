import React, { Component } from 'react'
//import Home from '../pages/home.jsx'
// import Plan from '../pages/plan.jsx'
// import Unit from '../pages/unit.jsx'
// import Idea from '../pages/idea.jsx'
import Tools from '../pages/tools.jsx'
import Account from '../pages/account.jsx'
import Customer from '../pages/customer.jsx'
import Loadable from './loadable'

let router = {
    routes:[
        {
            path:'/',
            component:Loadable('pages/home/home'),
            exact:true
        },
        {
            path:'/plan',
            component:Loadable('pages/plan/plan')
        },
        {
            path:'/unit',
            component:Loadable('pages/unit/unit')
        },
        {
            path:'/idea',
            component:Loadable('pages/idea/idea')
        },
        {
           path:'/tools',
           component:Tools,
           children:[
               {
                   path:'/tools/account',
                   component:Account
               },
               {
                   path:'/tools/customer',
                   component:Customer
               }
           ]
        }
    ]
}
let {routes} = router
export {routes}
export default router