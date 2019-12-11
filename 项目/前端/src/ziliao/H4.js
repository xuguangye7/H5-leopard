import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class H4 extends Component {
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
                ><h3>函数的应用</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>
                    方程的根与函数的零点
                    </h3>
                    <p>
                    1、函数零点的概念：对于函数 ，把使成立的实数叫做函数的零点。
                    </p>
                    <p>
                    2、函数零点的意义：函数 的零点就是方程 实数根，亦即函数 的图象与 轴交点的横坐标。即：方程有实数根，函数的图象与坐标轴有交点，函数有零点.
                    </p>
                    <p>
                    3、函数零点的求法：
                    </p>
                    <span style={{marginLeft:'30px'}}>
                    （1）（代数法）求方程 的实数根；
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    （2）（几何法）对于不能用求根公式的方程，可以将它与函数的图象联系起来，并利用函数的性质找出零点．
                    </span>
                    <p>
                    4、二次函数的零点：
                    </p>
                    <span style={{marginLeft:'30PX'}}>
                    （1）△＞0，方程 有两不等实根，二次函数的图象与 轴有两个交点，二次函数有两个零点．
                    </span><br/>
                    <span style={{marginLeft:'30PX'}}>
                    （2）△＝0，方程 有两相等实根（二重根），二次函数的图象与 轴有一个交点，二次函数有一个二重零点或二阶零点．
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    （3）△＜0，方程 无实根，二次函数的图象与 轴无交点，二次函数无零点
                    </span>
                </WingBlank>
            </div>
        )
    }
}
