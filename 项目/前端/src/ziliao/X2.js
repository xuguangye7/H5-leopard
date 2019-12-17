import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class X2 extends Component {
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
                ><h3>平面向量的坐标表示</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>
                    平面向量的坐标表示
                    </h3>
                    <p>
                    1 平面向量的坐标表示：在直角坐标系中，分别取与x轴、y轴方向相同的两个单位向量 i,j作为基底 由平面向量的基本定理知，该平面内的任一向量 a可表示成 a=x*i+y+j，由于a 与数对(x,y)是一一对应的，因此把(x,y)叫做向量 的坐标，记作a =(x,y)，其中x叫作 a在x轴上的坐标，y叫做在y轴上的坐标 
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    (1)相等的向量坐标相同，坐标相同的向量是相等的向量 
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (2)向量的坐标与表示该向量的有向线段的始点、终点的具体位置无关，只与其相对位置有关 
                    </span>
                    <p>
                    2 平面向量的坐标运算：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    (1)若 a=(x1,y1)，b=(x2,y2)则a+b=(x1x2,y1+y2)
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (2)	若A(x1,x2),B(x2,y2),则AB=(x2-x1,y2-y1) 
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (3)	若 a=(x,y)，则 λ a=( λx, λ y)
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (4)	若a=(x1,y1) ，b=(x2,y2),x1y2-x2y1=0,则ab平行 
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    (5)	若 a=(x1,y1)，b=(x2,y2),x1x2+y1y2=0,则ab垂直（ab=x1x2+y1y2） 
                    </span>
                </WingBlank>
            </div>
        )
    }
}
