import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Circle extends Component {
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
                ><h3>圆与方程</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>圆与方程</h3>
                    <p>2.1圆的标准方程：(x-a)²+(y-b)²=r²圆心C(a，b)，半径r</p>
                    <p>特例：圆心在坐标原点，半径为 的圆的方程是：x²+y²=r².</p>
                    <p>2.2点与圆的位置关系：</p>
                    <p>1. 设点到圆心的距离为d，圆半径为r：</p>
                    <p>(1)点在圆上等价于d=r；(2)点在圆外等价于d＞r；(3)点在圆内等价于d＜r．</p>
                    <p>2.给定点M(x0,y0)及圆(x-a)²+(y-b)²=r².</p>
                    <p>① M在圆C内(x0-a)²+(y0-b)²＜r²</p> 
                    <p>② M在圆C上(x0-a)²+(y0-b)²=r²</p>
                    <p>③ M在圆C外(x0-a)²+(y0-b)²＞r²</p>
                    <p>2.3圆的一般方程：x2+y2+Dx+Ey+F=0 (D2+E2-4F>0)</p>
                    <p>当D2+E2-4F>0时，方程表示一个圆，其中圆心 ，半径 .</p>
                    <p>当D2+E2-4F=0时，方程表示一个点 .</p>
                    <p>当D2+E2-4F＜0时，方程无图形（称虚圆）.</p>
                    <p>注：（1）方程Ax2+Bxy+Cy2+Dx+Ey+F=0表示圆的充要条件是：B=0且A=C不等于0且D2+E2-4F>0.</p>
                    <p>2.4 直线与圆的位置关系： 直线 与圆 的位置关系有三种，d是圆心到直线的距离，( </p>
                    <p>2.5 两圆的位置关系</p>
                    <img src="../img/yuan1.png" style={{width:'100%'}}/>
                    <p>2.6 圆的切线方程：</p>
                    <p>1.直线与圆相切：(1)圆心到直线距离等于半径r；（2）圆心与切点的连线与直线垂直（斜率互为负倒数）</p>
                    <p></p>
                </WingBlank>
            </div>
        )
    }
}
