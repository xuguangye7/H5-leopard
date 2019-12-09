import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Tuoyuan extends Component {
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
                ><h3>椭圆</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>椭圆</h3>
                    <p>一．椭圆及其标准方程</p>
                    <p>1．椭圆的定义：</p>
                    <p>椭圆（Ellipse）是平面内到定点F1、F2的距离之和等于常数（大于|F1F2|）的动点P的轨迹，F1、F2称为椭圆的两个焦点。其数学表达式为：|PF1|+|PF2|=2a（2a>|F1F2|）</p>
                    <p>2．标准方程：c2=a2-b2</p>
                    <img src="../img/tuoyuan1.png" style={{width:'100%'}}/>
                </WingBlank>
            </div>
        )
    }
}
