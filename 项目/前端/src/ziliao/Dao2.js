import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Dao2 extends Component {
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
                ><h3>导数的运算</h3></NavBar>
                <p style={{float:"left",marginLeft:"15px",width:"95%",fontSize:"16px",fontWeight:"bolder"}}>1.导数的四则运算：</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bolder"}}>法则1：</span>两个函数的和(或差)的导数,等于这两个函数的导数的和(或差)，即:[f(x)±g(x)]`= f`(x)±g`(x)</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bolder"}}>法则2：</span>两个函数的积的导数,等于第一个函数的导数乘以第二个函数,加上第一个函数乘以第二个函数的导数，即：[f(x)·g(x)]`= f`(x)g(x)+f(x)g`(x)常数与函数的积的导数等于常数乘以函数的导数：(Cf(x))`=Cf`(x). (C为常数)</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bolder"}}>法则3：</span>两个函数的商的导数，等于分子的导数与分母的积，减去分母的导数与分子的积，再除以分母的平方：[f(x)/g(x)]`=[f`(x)g(x)-f(x)g`(x)]/[g(x)]²(g(x)≠0)。</p>
                <p style={{float:"left",marginLeft:"15px",width:"95%",fontSize:"16px",fontWeight:"bolder"}}>2.复合函数的导数</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;形如y=f[g(x)]的函数称为复合函数。法则：f`[g(x)]=f`(m)*g`(x) .</p>
            </div>
        )
    }
}
