import React, { Component,Fragment } from 'react'
import Loading from '@/components/Loading'
//先配置动态import,静态import不能在逻辑里面执行的，因为它优先执行
//动态import就不受影响

class DynimicComp extends Component{
    constructor(){
        super()
        this.state={
            Comp:undefined
        }
    }
    render(){
        const {Comp} =this.state
        // if(!this.state.Comp){
        //     return <Loading></Loading>
        // }else{
        //     return <Comp />
        // }
       
        return <Fragment>
            <Loading spining={!this.state.Comp}></Loading>
            {Comp && <Comp />}
        </Fragment>
        
    }
    componentDidMount(){
       // window.chunkpath = this.props.path
        import(/*webpackChunkName:`${chunkPath}`*/`@/${this.props.path}.jsx`).then((comp)=>{
            setTimeout(() => {
                this.setState({
                    Comp:comp.default
                })
            }, 1000);
           
        })
    }
}

function HightComp(path){
    return class extends Component{
        render(){
            return <DynimicComp path={path}/>
        }
    }
}
export default HightComp