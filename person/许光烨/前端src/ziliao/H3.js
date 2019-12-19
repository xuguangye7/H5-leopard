import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class H3 extends Component {
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
                ><h3>基本初等函数</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>指数函数</h3>
                    <p>
                   （一）指数
                    </p>
                    <span>
                    1、	指数与指数幂的运算：<br/>
                    复习初中整数指数幂的运算性质：<br/>
                    am*an=am+n<br/>
                    (am)n=amn<br/>
                    (a*b)n=anbn<br/>

                    2、根式的概念：一般地，若 ，那么 叫做 的 次方根，其中 >1，且 ∈ *．<br/>
                    当n是奇数时，正数的n次方根是一个正数，负数的n次方根是一个负数。此时，a的n次方根用符号表示。<br/>
                    当n为偶数时，正数的n次方根有两个，这两个数互为相反数。此时正数a的正的n次方根用符号表示，负的n的次方根用符号表示。正的n次方根与负的n次方根可以合并成（a>0）。<br/>
                    注意：负数没有偶次方根；0的任何次方根都是0。<br/>

                    3、	分数指数幂<br/>
                        正数的分数指数幂的
                    ， 
                    0的正分数指数幂等于0，0的负分数指数幂没有意义<br/>

                    4、无理数指数幂<br/>
                    一般的，无理数指数幂aa（a>0,a是无理数）是一个确定的实数。有理数指数幂的运算性质同样使用于无理数指数幂。

                    </span>
                    <p>
                    （二）指数函数的性质及其特点
                    </p>
                    <span>
                    1、指数函数的概念：一般地，函数 b=a^k叫做指数函数，其中k是自变量，函数的定义域为R．<br/>
                    2、指数函数的图象和性质:<br/>
                    </span>
                    <span style={{marginLeft:'20px'}}>
                    当a>1时：
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    值域b>0
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    在R上单调递增
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    是非奇非偶函数
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    过定点(0,1)
                    </span>
                    <span style={{marginLeft:'20px'}}>
                    当a大于0小于1时：
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    值域b>0
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    在R上单调递减
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    是非奇非偶函数
                    </span><br/>
                    <span style={{marginLeft:'40px'}}>
                    过定点(0,1)
                    </span>
                    <h3>对数函数</h3>
                    <p>
                    （一）对数
                    </p>
                    <span>
                    1．对数的概念：一般地，如果 a^k=N （a>0,a不等于1），那么数k 叫做以 a为底N 的对数<br/>
                    说明：
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    1 注意底数的限制 a>0，且a不等于1 ；
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    2  a^x=N,logaN=x；
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    3 注意对数的书写格式：logaN=x 
                    </span><br/>
                    <span>
                    两个重要对数：
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    1 常用对数：以10为底的对数lgN ；
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    2 自然对数：以无理数e=2.71828 为底的对数的对数lnN ．
                    </span>
                    <p>
                    （二）对数的运算性质
                    </p>
                    <span>
                        如果a>0,且a不等于1，M>0,N>0,那么：
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                        loga（M.N）=logaM+logaN（除法对应的是-）
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                        logaM^N=nlogaM（n在R中)
                    </span><bbr/>
                    <span>
                        换底公式：
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                        logab=logcb/logca
                    </span><br/>
                    <span>利用换底公式推导出下面结论：</span><br/>
                    <span style={{marginLeft:'30px'}}>
                        loga^mb^n=n/mlogab
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                        logab=1/logba
                    </span>
                    <h3>幂函数</h3>
                    <p>
                    1、幂函数定义:
                    </p>
                    <span>
                    一般地，形如 y=x^a 的函数称为幂函数，其中 a为常数．
                    </span>
                    <p>
                    2、幂函数性质归纳．
                    </p>
                    <span>
                    （1）所有的幂函数在（0，+∞）都有定义并且图象都过点（1，1）；<br/>
                    （2）a>0 时，幂函数的图象通过原点，并且在区间 [0，+∞）上是增函数．特别地，当 a>1时，幂函数的图象下凸；当a大于0小于1 时，幂函数的图象上凸；<br/>
                    （3）a小于0时，幂函数的图象在区间（0，+∞） 上是减函数．在第一象限内，当 x从右边趋向原点时，图象在y 轴右方无限地逼近 轴正半轴，当x 趋于+∞ 时，图象在x 轴上方无限地逼近x 轴正半轴．<br/>

                    </span>
                </WingBlank>
            </div>
        )
    }
}
