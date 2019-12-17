import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Jiexi extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#fff",fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='/app/subject'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>解析几何专题</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>高中数学解析几何专题练习（精编版）</h3>
                    <p style={{lineHeight:"20px"}}>1.已知双曲线x2-y2=1的左、右顶点分别为A1,A2动直线l:y=kx+m与圆x2+y2=1 相切，且与双曲线左、右两支的交点分别为P1(x1,y1)P2(x2,y2)</p>
                    <p>（Ⅰ）求k的取值范围，并求x2-x1的最小值；</p>
                    <p style={{lineHeight:"20px"}}>（Ⅱ）记直线P1A1的斜率为k1，直线P2A2的斜率为k2，那么，k1*k2是定值吗？证明你的结论.</p>
                    <img src="img/jiexi1.png" style={{width:'100%',marginBottom:"200px"}}/>
                    <p style={{lineHeight:"20px"}}>2.已知椭圆的中心在坐标原点O，焦点在x轴上，离心率为 1/2，点 P（2，3）、 在该椭圆上，线段AB的中点T在直线 OP上，且A、O、B三点不共线．</p>
                    <p>(I)求椭圆的方程及直线AB的斜率；</p>
                    <p style={{marginBottom:"150px"}}>(Ⅱ)求△PAB面积的最大值．</p>
                    <p>3.已知抛物线P：x2=2py (p>0)．</p>
                    <p>（Ⅰ）若抛物线上点M（m,2）到焦点F的距离为3</p>
                    <p>（ⅰ）求抛物线P的方程；</p>
                    <p style={{lineHeight:"20px"}}>（ⅱ）设抛物线P的准线与y轴的交点为E，过E作抛物线P的切线，求此切线方程；</p>
                    <p style={{lineHeight:"20px",marginBottom:"150px"}}>（Ⅱ）设过焦点F的动直线l交抛物线于A，B两点，连接AO，BO并延长分别交抛物线的准线于C，D两点，求证：以CD为直径的圆过焦点F．</p>
                    <p style={{lineHeight:"20px"}}>4.在平面直角坐标系XOY中，设点P(x,y),M(x,-4)以线段PM为直径的圆经过原点O.</p>
                   
                    <p>（Ⅰ）求动点P的轨迹W的方程；</p>
                    <p style={{lineHeight:"20px",marginBottom:"200px"}}>（Ⅱ）过点E(0,-4)的直线l与轨迹W交于两点A,B ，点 A关于y 轴的对称点为A'，试判断直线A'B是否恒过一定点，并证明你的结论.</p>
                    <p>5.设椭圆x2/a2+y2/b2=1(a>b>0)的焦点分别为F1(-1,0)、F2(1,0)，直线 l：x=a2交x轴于点A ，且AF1=2AF2 ． </p>
                    <p>（Ⅰ）试求椭圆的方程</p>
                    <p style={{lineHeight:"20px"}}>（Ⅱ）过F1、F2分别作互相垂直的两直线与椭圆分别交于D、E、M、N四点（如图所示），若四边形DMEN的面积为27/7，求DE的直线方程．</p>
                    <img src="img/jiexi2.png" style={{width:'100%',marginBottom:"200px"}}/>


                </WingBlank>
            </div>
        )
    }
}