import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                >注册</NavBar>
                <div style={{width:'100%',marginTop:'30px',backgroundColor:'white'}}>
                    <List>
                        <InputItem placeholder="手机/邮箱">
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="密码">
                            <div style={{ backgroundImage: 'url(img/mima.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="再次输入密码">
                            <div style={{ backgroundImage: 'url(img/mima.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    <Link to='/login'>
                        <Button style={{background:'blue',color:'white'}}>去登陆</Button>
                    </Link>
                </div>
            </div>
        )
    }
}
