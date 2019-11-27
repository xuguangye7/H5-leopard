import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Forget extends Component {
    render() {
        return (
            <div style={{width:'100%',fontSize:'20px'}}>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/login'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                ></NavBar>
                不好意思，该功能还没能实现
            </div>
        )
    }
}
