import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Sl2 extends Component {
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
                ><h3>等比数列</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                <h2>等比数列</h2>
                <p style={{lineHeight:'25px'}}>
                    定义：如果一个数列从第2项起，每一项与它的前一项的比等于同一个常数，那么这个数列就叫做等比数列。<br/>
                    等比中项：若三数a、G、b成等比数列⇒G²=ab（a、b同号），反之不一定成立。<br/>
                    通项公式：aₙ = a₁qⁿ⁻¹=aᵐqⁿ⁻ᵐ<br/>
                    前n项和公式：Sₙ = a₁(1-qⁿ)/(1-q) = a₁-aₙq<br/>
                    常用性质：<br/>
                    ①	若m+n=p+q(m,n,p,q∈N₊)，则aₘ·aₙ=aₚ·aq<br/>
                    ②	aₖ，aₖ₊ₘ，aₖ₊₂ₘ…为等比数列，公比为qᵏ (下标成等差数列,则对应的项成等比数列)<br/>
                    ③	数列&#123;	λaₙ&#125;	（λ为不等于零的常数）仍是公比为q的等比数列；正项等比数列 ；则是&#123;	lgaₙ&#125;	公差为lgq的等差数列；<br/>
                    ④	若&#123;	aₙ&#125;	是等比数列，则&#123;	caₙ&#125;	、&#123;	aₙ²&#125;	、&#123;	1/aₙ&#125;	、&#123;	aₙʳ&#125;	(r∈Z)是等比数列，公比依次是 q、q²、1/q、qʳ。<br/>
                    ⑤	单调性：<br/>
                    a₁&lt;0,q&lt;1或a₁&gt;0,0&gt;q&gt;1 ⇒&#123;	aₙ&#125;	为递增数列; <br/>
                    a₁&lt;0,0&gt;q&gt;1或a₁&gt;0,q&lt;1 ⇒&#123;	aₙ&#125;	为递减数列；<br/>
                    q=1⇒&#123;	aₙ&#125;	为常数列；<br/>
                    q=0⇒&#123;	aₙ&#125;	为摆动数列<br/>
                    ⑥	既是等差数列又是等比数列的数列是常数列。<br/>
                    ⑦	若等比数列&#123;	aₙ&#125;	的前n项和Sₙ，则Sₖ、S₂ₖ₋ₖ、S₃ₖ₋₂ₖ …  是等比数列。<br/>                    
                </p>
            </WingBlank>
            </div>
        )
    }
}
