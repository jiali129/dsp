import Home from '../pages/home.jsx'
import Plan from '../pages/plan.jsx'
import Unit from '../pages/unit.jsx'
import Idea from '../pages/idea.jsx'
import Tools from '../pages/tools.jsx'
import Account from '../pages/account.jsx'
import Customer from '../pages/customer.jsx'

let router = {
    routes:[
        {
            path:'/',
            component:Home,
            exact:true
        },
        
        {
            path:'/plan',
            component:Plan
        },
        {
            path:'/unit',
            component:Unit
        },
        {
            path:'/idea',
            component:Idea
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