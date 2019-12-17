import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Liti extends Component {
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
                ><h3>立体几何专题</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>高中数学立体几何专题练习（精编版）</h3>
                    <p style={{lineHeight:"25px"}}>1．一个圆锥的侧面积是其底面积的2倍，则该圆锥的母线与底面所成的角为（     ）</p>
                    <p>（A）30             （B）45               （C）60            （D）75 </p>
                    <p style={{lineHeight:"25px"}}>2.棱长为a的正方体中，连接相邻的中心，以这些线段为棱的八面体的体积为（     ）</p>
                    <p>（A）a3/3   （B）a3/4               （C） a3/6     （D） a3/12  </p>
                    <p>3.在下列条件中，可判断平面 α与 β平行的是                             （     ）</p>
                    <p>（A）α与 β都垂直于平面γ         （B）α 内存在不共线的三点到β的距离相等  </p>
                    <p>（C） l、m 是内两条直线，l//β且  m//β  </p>
                    <p>（D）l、m 是两条异面直线，且 </p>
                    <p style={{lineHeight:"20px"}}>4．将长度为1的铁丝分成两段，分别围成一个正方形和一个圆形。要使它们的面积之和最小，正方形的周长应为：________________________</p>
                    <p style={{lineHeight:"25px"}}>5．已知某球体的体积与其表面积的数值相等，则此球体的半径为：_________________</p>
                    <p style={{lineHeight:"25px"}}>6．在正四棱锥P—ABCD中，若侧面与底面所成二面角的大小为60 ，则异面直线PA与BC所成角的正弦值为：_____________________  </p>
                    <p>7.</p>
                    <img src="../img/litijihe1.png" style={{width:'100%',marginBottom:"150px"}}/>
                    <p style={{lineHeight:"25px"}}>8.如图ABCD— 是正四棱柱，侧棱长为1，底面边长为2，E是棱BC的中点。</p>
                    <p>（1）求三棱锥D —DBC的体积；</p>
                    <p>（2）证明BD  // 平面C DE</p>
                    <p>（3）求面C DE与面CDE所成二面角的正切值。</p>
                    <img src="../img/litijihe2.png" style={{width:'100%',marginBottom:"150px"}}/>
                    
                    <p></p>
                    <p></p>

                </WingBlank>
            </div>
        )
    }
}