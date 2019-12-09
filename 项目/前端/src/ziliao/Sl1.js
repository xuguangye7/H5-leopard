import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Sl1 extends Component {
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
                ><h3>等差数列</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                <h2>等差数列</h2>
                <p style={{lineHeight:'25px'}}>
                    定义：如果一个数列从第2项起，每一项与它的前一项的差等于同一个常数，即aₙ-aₙ₋₁=d , (n≥2,n∈N₊),那么这个数列就叫做等差数列。<br/>
                    等差中项：若三数a,A,b成等差数列⇔A=(a+b)/2<br/>
                    通项公式：aₙ = a₁+(n-1)d = aₘ+(n-m)d或aₙ = pn+q（p、q为常数）<br/>
                    前n项和公式：Sₙ = na₁+[n(n-1)/2]d = [n(a₁+aₙ)/2]<br/>
                    常用性质：<br/>
                    ①	若m+n=p+q(m,n,p,q∈N₊)，则aₘ+aₙ=aₚ+aq<br/>
                    ②	下标为等差数列的项 ，仍组成等差数列；<br/>
                    ③	数列&#123;λaₙ+b&#125;（λ,b为常数）仍为等差数列；<br/>
                    ④	若&#123;aₙ&#125;、&#123;bₙ}是等差数列，则&#123;aₙ&#125;、&#123;kaₙ+&#123;pbₙ&#125;&#125;  
                        (k、p是非零常数) 、aₚₙ₊q、…（p、q∈N₊）也成等差数列。<br/>
                    ⑤	单调性： &#123;aₙ&#125;的公差为d ，则：<br/>
                    ⅰ）  d&lt;0⇔&#123;aₙ&#125;为递增数列；<br/>
                    ⅱ）  d&gt;0⇔&#123;aₙ&#125;为递减数列；<br/>
                    ⅲ）  d=0⇔&#123;aₙ&#125;为常数列；<br/>
                    ⑥	数列&#123;aₙ = pn+q&#125;为等差数列 （p,q是常数）<br/>
                    ⑦	若等差数列 的前n项和Sₙ，则Sₖ、S₂ₖ₋ₖ、S₃ₖ₋₂ₖ … 是等差数列。<br/>
                </p>

            </WingBlank>
            </div>
        )
    }
}
