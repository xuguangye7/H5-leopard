import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Dao1 extends Component {
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
                ><h3>导数基本概念</h3></NavBar>
                <p style={{float:"left",marginLeft:"15px",width:"95%",fontSize:"16px",fontWeight:"bolder"}}>1. 导数的定义：</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;设x0是函数y=f(x)定义域的一点，如果自变量x在x0处有增量△x，则函数值y也引起相应的增量△y=f（x0+△x）-f（x0）；比值△y/△x=f（x0+△x）-f（x0）/△x称为函数y=f（x）在点x0到x0+△x之间的平均变化率；如果lim△x->0△y/△x=lim△x->0f（x0+△x）-f（x0）/△x极限存在，则称函数y=f(x)在点x0处可导，并把这个极限叫做y=f(x)在x0处的导数。</p>
                <p style={{float:"left",marginLeft:"15px",width:"95%",fontSize:"16px",fontWeight:"bolder"}}>2. 导数的几何意义：（求函数在某点处的切线方程）</p>
                <p style={{width:"95%",marginLeft:"10px",lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;函数y=f(x)在点x0处的导数的几何意义就是曲线y=f(x)在点（x0,f(x)）处的切线的斜率，也就是说，曲线y=f(x)在点P（x0,f(x)）处的切线的斜率是f`（x0），切线方程为y-y0=f`（x）(x-x0)</p>
                <p style={{float:"left",marginLeft:"15px",width:"95%",fontSize:"16px",fontWeight:"bolder"}}>3．基本常见函数的导数:</p>
                <div style={{float:"left",marginLeft:"16px"}}>①C`=0;（C为常数）</div>
                <div style={{float:"left",marginLeft:"50px"}}>②(xn)`=nxn-1</div>
                <div style={{float:"left",marginLeft:"16px",marginTop:"10px"}}>③(sinx)`=cosx; </div>
                <div style={{float:"left",marginLeft:"85px",marginTop:"10px"}}>④(cosx)`=-sinx;</div>
                <div style={{float:"left",marginLeft:"16px",marginTop:"10px"}}>⑤(e`x)`=e`x;</div>
                <div style={{float:"left",marginLeft:"100px",marginTop:"10px"}}>⑥(a`x)`=a`xlna; </div>
                <div style={{float:"left",marginLeft:"16px",marginTop:"10px"}}>⑦(lnx)`=1/x; </div>
                <div style={{float:"left",marginLeft:"100px",marginTop:"10px"}}>⑧(logax)`x=1/xlogae.</div>
            </div>
        )
    }
}
