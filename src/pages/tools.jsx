import React,{Component} from 'react'
import RouterView from '@/router/router'
import {Link } from 'react-router-dom'
class Tools extends Component{
    constructor(){
        super()
        this.goAccount=this.goAccount.bind(this)
    }
    render(){
        return(
            <div>
                <p>
                    <Link to='/tools/account'>账户1</Link>
                    <Link to='/tools/customer'>账户2</Link>
                    <button onClick={this.goAccount}>账户管理</button>
                </p>
                <RouterView routes={this.props.routes}/>
            </div>  
        ) 
    }
    goAccount(){
        this.props.history.push('/tools/account')
      }
}
export default Tools