import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class S1 extends Component {
    render() {
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='/ziliao'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>特殊角的三角函数值</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>
                    特殊角的三角函数值
                    </h3>
                    <img src='../img/jiao.png' style={{width:'100%'}}/>
                </WingBlank>
            </div>
        )
    }
}
