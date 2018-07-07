import React,{Component} from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
class RouterView extends Component{
    render(){
        let {routes} =this.props
        return (
            <Switch>
                {
                    routes.map((route,index)=>{
                        return <Route path={route.path} exact={route.exact || false} render={(routerApi)=>{
                            return <route.component routes={route.children} {...routerApi}></route.component>
                        }} key={index}></Route>
                    })
                }
            </Switch>
        )
    }
}
export default RouterView