import React, { Component,Fragment } from 'react'
import loading from './hearts.svg'
import './loading.css'
class Loading extends Component{
    constructor(){
        super()
        this.state={
            cls:"mask"
        }
    }
    render(){
        let {spining} =this.props;
        if(spining){
            return (
                 <div className={this.state.cls}>
                    <img src={loading} alt=""/>
                </div>
            ) 
        }else{
            return <div></div>
        }
         
    }
    componentDidMount(){
        this.setState({
            cls:'mask active'
        })
    }
    componentWillUnmount(){
        this.setState({
            cls:"mask"
        })
    }
}
export default Loading