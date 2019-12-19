import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class S2 extends Component {
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
                ><h3>角度值和弧度制的互化</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>
                    角度制与弧度制的互化
                    </h3>
                    <p>360度=2π，180度=π</p>
                    <img src='../img/xiang.png' style={{width:'100%'}} />
                    <h4>弧长及扇形面积公式</h4>
                    <p>(1)弧长公式：l=|a|r (a是圆心角且为弧度制)</p>
                    <p>(2)扇形面积公式：S=1/2lr(r是扇形半径)</p>
                    <h4>任意角的三角函数</h4>
                    <p>正弦：sina=y/r</p>
                    <p>余弦：cosa=x/r</p>
                    <p>正切：tana=y/x</p>
                    <p>各象限的符号：</p>
                    <span style={{marginLeft:'30px'}}>
                    记忆口诀：一全正，二正弦，三两切，四余弦
                    </span>
                    <h4>同角三角函数的基本关系</h4>
                    <p>(1)sina^2+cosa^2=1</p>
                    <p>tana=sina/cosa</p>
                    <h4>诱导公式</h4>
                    <p>简单概括为：奇变偶不变，符号看象限。</p>
                    <img src='../img/xiang1.png' style={{width:'100%'}} />
                </WingBlank>
            </div>
        )
    }
}
