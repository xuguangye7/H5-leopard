import React, { Component } from 'react'
import{HashRouter as Router,Route,Link}from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
import AppTab from './AppTab'
export default class Login extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%'}}>
                    <NavBar
                        style={{backgroundColor:'blue',color:'white'}}
                    >登录</NavBar>
                </div>
                <div>
                    <p style={{width:'100%',fontSize:'20px'}}>欢迎来到</p>
                    <p style={{width:'100%',fontSize:'25px',marginLeft:'30px'}}>数学天地</p>
                </div>
                <div style={{width:'100%',backgroundColor:'white'}}>
                    <List>
                        <InputItem placeholder="手机号">
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="密码">
                            <div style={{ backgroundImage: 'url(img/mima.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    <Button style={{background:'blue',color:'white'}}>登录</Button>
                    <div style={{
                        width:"100%",
                        textAlign:'center'
                    }}>
                        <Link to='regiset'>
                            <p style={{fontSize:'18px',marginLeft:'25%',color:'#3fcccb',float:'left'}}>新用户注册</p>
                        </Link>
                        <Link to='/forget'>
                            <p style={{fontSize:'18px',color:'#3fcccb',float:'left'}}>  | 忘记密码?</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
