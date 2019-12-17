import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,WingBlank,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
// import { WingBlank} from 'antd-mobile'
export default class Gongshi extends Component {
    render() {
        return (
            <div style={{
                width:'100%',
                height:'100%',
                backgroundColor:'#fff',
                fontFamily:'Kaiti'
            }}>
                <NavBar
                leftContent={[
                    <Link to='/app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center',
                width:'100%',
                position:'fixed',
                top:'0',
                zIndex:'10'
            }}
                ><h3 style={{
                    fontFamily:'Kaiti',
                }}>公式</h3></NavBar>
                <div style={{
                    backgroundColor:'#099ff5',color:'white',textAlign:'center',
                    width:'100%',height:'45px',zIndex:'10'
                }}>
                </div>
                <img src="img/1-2.jpg" style={{
                    width:'100%'
                }}/>
                <h3>函数与导数公式</h3>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;基本常见函数的导数</h4>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'16px',lineHeight:"25px",
                    border:'solid 1px gray',borderRadius:'10px',
                    background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        ① C' = 0（C为常数）  &nbsp;                        
                        ② (xⁿ)' = nxⁿ⁻¹<br/>
                        ③ (sin x)' = cos x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        
                        ④ (cos x)' = - sin x<br/>
                        ⑤ (eᕽ)' = eᕽ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                               
                        ⑥ (aᕽ)' = aᕽlna <br/>
                        ⑦ (ln x)'= 1/x; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                   
                        ⑧ (logₐx)' = (1/x)(logₐe)
                    </p>
                </WingBlank>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;导数四则运算</h4>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                    border:'solid 1px gray',borderRadius:'10px',
                    background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        [f(x) ± g(x)]' = f'(x) ± g(x)
                        <br/>[f(x) · g(x)]' = f'(x)g(x) + f(x)g'(x)
                        <br/>[f(x) / g(x)]' = [f'(x)g(x) + f(x)g'(x)] / [g(x)]²
                    </p>
                </WingBlank>
                <WhiteSpace/>
                <h3>三角函数诱导公式</h3>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                border:'solid 1px gray',borderRadius:'10px',
                background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        sin(2kπ+α) = sinα  &nbsp;&nbsp;&nbsp;cos(2kπ+α) = cosα  <br/>tan(2kπ+α) = tanα<br/>
                        sin(kπ+α) = -sinα  &nbsp;&nbsp;&nbsp;cos(kπ+α) = -cosα  <br/>tan(kπ+α) = tanα<br/>
                        sin(-α) = -sinα  &nbsp;&nbsp;&nbsp;cos(-α) = cosα  <br/>tan(-α) = -tanα<br/>
                        sin(π-α) = sinα  &nbsp;&nbsp;&nbsp;cos(π-α) = -cosα  <br/>tan(π-α) = -tanα<br/>
                        sin(π/2-α) = cosα  &nbsp;&nbsp;&nbsp;cos(π/2-α) = sinα<br/>
                        sin(π/2+α) = cosα  &nbsp;&nbsp;&nbsp;cos(π/2+α) = -sinα<br/>
                        sin(α±β) = sinαcosβ ± cosαsinβ <br/>cos(α±β) = cosαcosβ 〒 sinαsinβ <br/>
                        tan(α±β) = (tanα ± tanβ)/(1 〒 tanα · tanβ)
                    </p>
                </WingBlank>
                <WhiteSpace/>
                <h3>数列公式</h3>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;通项公式</h4>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;基本求和公式</h4>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                border:'solid 1px gray',borderRadius:'10px',
                background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        等差：Sₙ = na₁+[n(n-1)/2]d = [n(a₁+aₙ)/2]<br/>
                        等比：Sₙ = [a₁(1-qⁿ)]/(1-q) = (a₁-aₙq)/(1-q)
                    </p>
                </WingBlank>
                <WhiteSpace/>
                <h3>解析几何</h3>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;直线</h4>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                border:'solid 1px gray',borderRadius:'10px',
                background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        斜率：k = tanα<br/>
                        点斜式：y-y₀ = k(x-x₀)<br/>                    
                        斜截式：y = kx+b<br/>
                        两点式：(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)<br/>
                        截距式：x/a+y/b = 1<br/>
                        一般式：Ax+By+C=0<br/>
                        两直线交角：tanθ = (k₂-k₁)/(1+k₂k₁)=(A₁B₂-A₂B₁)/(A₁A₂+B₁B₂)<br/>
                        点到直线距离：d = |Ax₀+By₀+C|/√(A²+B²)<br/>
                        两平行线距离：d = |C₁-C₂|/√(A²+B²)
                    </p>
                </WingBlank>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;圆</h4>
                
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                border:'solid 1px gray',borderRadius:'10px',
                background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        标准方程：(x-a)²+(y-b)²=r²<br/>
                        一般方程：x²+y²+Dx+Ey+F=0<br/>
                        圆心到直线距离：d = |Aa+Bb+C|/√(A²+B²)<br/>
                        圆的切线方程：y = kx±√(1+k²)r<br/>
                        圆的弦长公式：|AB| = √[(x₁-x₂)²+(y₁-y₂)²] = √[(1+k²)[(x₁+x₂)²-4x1x2]]
                    </p>
                </WingBlank>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;圆锥曲线</h4>
                <WingBlank style={{borderRadius:'5px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'20px',lineHeight:"25px",
                border:'solid 1px gray',borderRadius:'10px',
                background:'url(../img/gonshi.png) center center /  100% 100%  no-repeat'}}>
                        椭圆标准方程：x²/a²+y²/b²=1 或 y²/a²+x²/b²=1<br/>
                        双曲线标准方程：x²/a²-y²/b²=1 或 y²/a²-x²/b²=1<br/>
                        抛物线标准方程：x=2py 或 y=2px<br/>
                        直线与椭圆联立：<br/>(a²A²+b²B²)x²+2a²ACx+a²(C²-b²B²)=0<br/>
                        直线与椭圆相交弦长：<br/>|AB| = √[(x₁-x₂)²+(y₁-y₂)²] = √[(1+k²)[(x₁+x₂)²-4x1x2]]<br/>
                        直线与双曲线联立：<br/>(a²A²-b²B²)x²+2a²ACx+a²(C²+b²B²)=0<br/>
                        直线与双曲线相交弦长：<br/>|AB| = √[(x₁-x₂)²+(y₁-y₂)²] = √[(1+k²)[(x₁+x₂)²-4x1x2]]<br/>
                        直线与抛物线联立：k²x²+2(kb-p)x+b²=0<br/>
                        直线与抛物线相交弦长：|AB|=√(1+k²)·√Δ/|a|<br/>
                    </p>     
                </WingBlank> 
            </div>
            
        )
    }
}
