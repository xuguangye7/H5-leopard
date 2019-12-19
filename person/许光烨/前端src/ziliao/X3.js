import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class X3 extends Component {
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
                ><h3>平面向量的向量积</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>平面向量的数量积</h3>
                    <p>
                    1 两个向量的数量积：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    已知两个非零向量 a与 b，它们的夹角为 &，则 a·b =︱a ︱·︱b ︱cos& 
                    叫做 a与 b的数量积（或内积）  规定 0a=0 
                    </span>
                    <p>
                    2 向量的投影：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    ︱ b︱cos& = ab/|a|∈R，称为向量 b在 a方向上的投影 投影的绝对值称为射影 
                    </span>
                    <p>
                    3 数量积的几何意义：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    a·b 等于a 的长度与 b在 a方向上的投影的乘积 
                    </span>
                    <p>
                    4 向量的模与平方的关系：  
                    </p>
                    <span style={{marginLeft:'30px'}}>
                        a*a=a^2=|a|^2
                    </span>
                    <p>
                    5 乘法公式成立： 
                    </p>
                    <span style={{marginLeft:'30PX'}}>
                        (a+b)(a-b)=a^2-b^2=|a|^2-|b|^2<br/>
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (a+b)^2=|a|^2+2*ab+|b|^2
                    </span>
                    <p>
                    6 平面向量数量积的运算律：
                    </p>
                    <span style={{marginLeft:'30PX'}}>
                    ①交换律成立： ab=ba
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    ②对实数的结合律成立： (λa)b=λ(ab)=a(λb)
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    ③分配律成立： (a+b)c=ac+bc 
                    </span>
                    <p>
                    特别注意：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    消去律不成立，且ab=0，不能 得出a=0，b=0
                    </span>
                    <p>
                    7 两个向量的数量积的坐标运算：
                    </p>
                    <span>
                    已知两个向量 a=(x1,y1)，b=(x2,y2),则 a·b =x1x2+y1y2  
                    </span>
                    <p>
                    8 向量的夹角:
                    </p>
                    <span>
                    已知两个非零向量 a与b ，作OA =a , OB =b ,则∠AOB= & 叫做向量 a与b 的夹角 
                    cos &= cos(a,b)=ab/|a||b|  
                    当且仅当两个非零向量 a与b 同方向时，&=00，当且仅当 ab与 反方向时&=1800，同时0 与其它任何非零向量之间不谈夹角这一问题 
                    </span>
                </WingBlank>
            </div>
        )
    }
}
