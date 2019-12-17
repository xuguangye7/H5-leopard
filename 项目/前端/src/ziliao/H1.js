import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
import H3 from './H3'
export default class H1 extends Component {
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
                ><h3>函数的定义</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>函数的定义</h3>
                    <p>
                        1．	函数的概念：设A、B是非空的数集，如果按照某个确定的对应关系f，使对于集合A中的任意一个数x，
                        在集合B中都有唯一确定的数f(x)和它对应，那么就称f：A→B为从集合A到集合B的一个函数．记作： y=f(x)，x∈A．
                    </p>
                    <span>
                    （1）其中，x叫做自变量，x的取值范围A叫做函数的定义域；
                    </span><br/>
                    <span>
                    （2）与x的值相对应的y值叫做函数值，函数值的集合叫做函数的值域．
                    </span>
                    <p>
                    2．	函数的三要素：定义域、值域、对应法则
                    </p>
                    <p>
                    3．	函数的表示方法：
                    </p>
                    <span >
                    （1）解析法：明确函数的定义域
                    </span><br/>
                    <span>
                    （2）图想像：确定函数图像是否连线，函数的图像可以是连续的曲线、直线、折线、离散的点等等。
                    </span><br/>
                    <span>
                    （3）列表法：选取的自变量要有代表性，可以反应定义域的特征。
                    </span>
                </WingBlank>
            </div>
        )
    }
}
