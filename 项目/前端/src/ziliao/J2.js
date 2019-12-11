import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class J2 extends Component {
    render() {
        return (
            <div>
                <NavBar
                leftContent={[
                    <Link to='/ziliao'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>三角形的面积公式</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>
                        三角形面积公式
                    </h3>
                    <span>
                    （1） S=1/2ah=1/2bh=1/2ch （ h分别表示a 、b 、c 上的高）；<br/>
                    （2） S=1/2absinC=1/2bcsinA=1/2acsinB<br/>
                    （3） S=2*R^2sinAsinBsinC  （R 为外接圆半径）<br/>
                    （4） S=abc/4*R；<br/>
                    （5）S=1/2r*l（r 是内切圆的半径， 是三角形的周长）
                    </span>
                </WingBlank>
            </div>
        )
    }
}
