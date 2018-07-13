import React, { Component } from 'react'
import './home.css'
//import {echarts} from 'echarts'
import { DatePicker } from 'antd';
import moment from 'moment'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import "moment/locale/zh-cn";
moment.locale('zh-cn')
import http from '@/utils/http.js'
import {Spin} from 'antd'
const { RangePicker } = DatePicker;
class Home extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this);
        this.option = {
            xAxis: {
                type: 'category',
                nameLocation:"start",
                boundaryGap:false,
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [],
                type: 'line'
            }]
        };
        this.state={
            loading:true
        }
    }
    render() {
        return (
            <div className='home'>
                <header>
                    <div className='head'>
                        <span><i className='iconfont icon-qian'></i></span>
                        <span><i className='iconfont icon-tanhao'></i></span>
                        <div className='mary'>
                            <b>wangxiaohu</b>
                            <p>账户ID：6875759</p>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='dlss'>
                            <dl className='dls'>
                                <dd>
                                    <i className='iconfont icon-qian'></i>
                                </dd>
                                <dt>
                                    <p>现金账户</p>
                                    <b>￥1266,560.00</b>
                                </dt>
                            </dl>
                            <dl className='dls'>
                                <dd>
                                    <i className='iconfont icon-jihua'></i>
                                </dd>
                                <dt>
                                    <p>现金账户</p>
                                    <b>￥1266,560.00</b>
                                </dt>
                            </dl>
                        </div>
                        <RangePicker onChange={this.onChange} format='YYYY/MM/DD' />
                        <div className='masks'>
                           <Spin spinning={this.state.loading} delay={500}wrapperClassName='graph'></Spin>
                           <div className='graph' ref='graph'></div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
    componentDidMount() {
        let echartsInstance = echarts.init(this.refs.graph);
        this.echartsInstance = echartsInstance;
        this.setDate([moment().subtract(7,'days').format("YYYY/MM/DD"),moment().format("YYYY/MM/DD")])
        window.onresize = function (){
            echartsInstance.resize()
        }
    }
    //日历
    onChange(date, dateString) {
        //console.log(date, dateString);
        this.setDate(dateString)
    }
    //调用方法
    setDate(date) {
        let d = moment.duration(moment(date[1]) - moment(date[0])).asDays();
        let xarr = []
        for (let i = 0; i<=d; i++) {
            xarr.unshift(moment(date[1]).subtract(i, "days").format("YYYY/MM/DD"))
        }

        //请求后台路径
        let option = this.option;
        setTimeout(()=>{
            http.post('/dsp-report/index', { count: d+1 }).then(res => {
                //console.log(res)
                option.xAxis.data = xarr
                option.series[0].data = res.data.dataY1
                this.echartsInstance.setOption(option)
                this.setState({
                    loading:false
                })
            })
        },1000)
    }

}
export default Home