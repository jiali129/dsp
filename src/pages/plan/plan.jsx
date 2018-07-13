import React,{Component} from 'react'
import http from '@/utils/http'
class Plan extends Component{
    render(){
        return(
          <div>
              Plan 

          </div>
        )
    }
    componentDidMount(){
        http.get('/dsp-report/index').then(res=>{
            console.log(res)
        })
    }
}
export default Plan