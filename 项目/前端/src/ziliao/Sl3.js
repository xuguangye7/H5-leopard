import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Sl3 extends Component {
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
                ><h3>其他数列</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                <h2>其他数列</h2>
                <p style={{lineHeight:'25px'}}>
                    I观察法：已知数列前若干项，求该数列的通项时，一般对所给的项观察分析，寻找规律，从而根据规律写出此数列的一个通项。<br/>
                    II公式法：若已知数列的前n项和Sₙ与aₙ的关系，求数列&#123;	aₙ&#125;的通项aₙ可用公式<br/>
                    aₙ=S₁(n=1)或Sₙ- Sₙ₋₁(n≥2)构造两式作差求解。<br/>
                    用此公式时要注意结论有两种可能，一种是“一分为二”，即分段式；另一种是“合二为一”，即 a₁和 aₙ合为一个表达，（要先分 n=1和n≥2 两种情况分别进行运算，然后验证能否统一）。<br/>
                    III累加法：<br/>
                    形如aₙ₊₁= aₙ+f(n)型的递推数列（其中f(n)是关于n的函数）可构造：<br/>
                    aₙ-aₙ₋₁ =f(n-1), aₙ₋₁-aₙ₋₂=f(n-2),…, a₂-a₁=f(1)<br/>
                    将上述n-1个式子两边分别相加，可得：<br/>
                    aₙ=f(n-1)+f(n-2)+…+f(2)+f(1)+ a₁,(n≥2)<br/>
                    ①若f(n)是关于 的一次函数，累加后可转化为等差数列求和; <br/>
                    ② 若f(n)是关于 的指数函数，累加后可转化为等比数列求和;<br/>
                    ③若f(n)是关于 的二次函数，累加后可分组求和;  <br/>
                    ④若f(n)是关于 的分式函数，累加后可裂项求和. <br/>
                    IV累乘法：<br/>
                    形如aₙ₊₁= aₙ·f(n) （aₙ₊₁/ aₙ=f(n)）型的递推数列（其中f(n)是关于n的函数）可构造：<br/>
                    aₙ/aₙ₋₁ =f(n-1), aₙ₋₁/aₙ₋₂=f(n-2),…, a₂/a₁=f(1)<br/>
                    将上述n-1个式子两边分别相乘，可得：<br/>
                    aₙ=f(n-1)·f(n-2)·…·f(2)f(1)a₁,(n≥2)<br/>
                    有时若不能直接用，可变形成这种形式，然后用这种方法求解。<br/>
                    V 构造数列法：<br/>
                    ㈠形如aₙ₊₁=pn+q（其中p,q均为常数且p≠0）型的递推式： <br/>
                    （1）若p=1时，数列&#123;	aₙ&#125;	为等差数列; <br/>
                    （2）若q=0时，数列&#123;	aₙ&#125;	为等比数列;<br/>
                    （3）若p≠1且q≠0时，数列&#123;	aₙ&#125;	为线性递推数列，其通项可通过待定系数法构造等比数列来求.方法有如下两种：<br/>
                    设aₙ₊₁+λ=p（aₙ+λ）,展开移项整理得aₙ₊₁ =paₙ+(p-1)λ,与题设aₙ₊₁=pn+q比较系数（待定系数法）得<br/>
                    λ=q/(p-q),(p≠0) ⇒ aₙ₊₁+q/(p-1)=p(aₙ+q/(p-1))⇒aₙ+q/(p-1)=p(aₙ₋₁+q/(p-1),&#123;	aₙ+q/(p-1)&#125;	构成以a₁+q/(p-1)为首项，以p为公比的等比数列.再利用等比数列的通项公式求出&#123;	aₙ+q/(p-1)&#125;	的通项整理可得aₙ。 


                </p>
            </WingBlank>
            </div>
        )
    }
}
