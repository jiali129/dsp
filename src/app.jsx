import React, { Component, PurComponent,Fragment } from 'react'
import {BrowserRouter,Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';
import config,{routes} from '@/router/config'
import RouterView from '@/router/router'
const SubMenu = Menu.SubMenu;

class App extends Component {
    constructor(){
        super()
        this.state={
            collapsed:false 
        }
    }
    render() {
        return (
           <BrowserRouter>
            <Fragment>
                <div className='aside'>
                <div className='asideimg'>
                <img src="http://localhost:8888/src/assets/images/yong_01.png" alt=""/>
                </div>
                <div className='textNew'>
                    <span>+ 新建广告</span>
                </div>
                <Menu 
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span><Link to='/'>首页</Link></span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
                        <Menu.Item key="5"><Link to='/plan'>广告计划</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/unit'>广告单元</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/idea'>广告创意</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>数据中心</span></span>}>
                        <Menu.Item key="9">数据修稿</Menu.Item>
                        <Menu.Item key="10">数据确定</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>工具箱</span></span>}>
                        <Menu.Item key="9"><Link to='/tools'>数据修稿</Link></Menu.Item>
                        <Menu.Item key="10">数据确定</Menu.Item>
                    </SubMenu>
                </Menu>
                </div>
                <div className='content'>
                 <RouterView routes={routes}/>
                </div>
            </Fragment>
            </BrowserRouter>
        )
    }
}
export default App