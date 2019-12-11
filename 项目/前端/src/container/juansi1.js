import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class juansi1 extends Component {
    render() {
        return (
            <div>
                <NavBar
                leftContent={[
                    <Link to='/Zhenti'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>历年真题</h3></NavBar>
                <p style={{fontSize:"18px",textAlign:"center",fontWeight:"bolder",marginTop:"15px"}}>
                    2018年全国统一高考数学试卷（理科）（新课标）卷一
                </p>
                <p style={{fontSize:"16px",float:"left",fontWeight:"bolder",marginTop:"-10px",marginLeft:"6px"}}>一、单选题</p>
                <p style={{width:'300px',fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>1.设z=1-i/1+i+2i，则|z|=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.0 B.1/2C.1 D.2</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>2.已知集合A=（x|x2-x-2>0），则CRA=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",width:'150px',marginLeft:"16px"}}>A.(x|2>x>-1)</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",marginLeft:"0px"}}>B.(x|2>=x>=-1)</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",width:'150px',marginLeft:"16px"}}>C.(x|-1>x)</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",marginLeft:"0px"}}>D.(x|x>2)</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>3．某地区经过一年的新农村建设，农村的经济收入增加了一杯，实现翻番。为更好地了解该地区农村的经济收入变化情况，统计和该地图新农村建设前后农村的经济收入构成比例，得到如下饼图：则下面结论中不正确的是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.新农村建设后，种植收入减少</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>B.新农村建设后，其他收入增加了一倍以上</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>C.新农村建设后，养殖收入增加了一倍</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>D.新农村建设后，养殖收入与第三产业收入的总和超过了经济收入的一半</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>4.记Sn为等差数列an的前n项和，若3S3=S2+S4，a1=2，则a5</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．-12	B．-10	C．10	D．12</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>5.设函数f（x）=x3+（a-1）x2+ax，若f（x）为奇函数，则曲线y=f（x）在点(0,0)处的切线方程为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．y=-2x	B．y=-x	C．y=2x  	D．y=x</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>6.在△ABC中，AD为BC边上的中线，E为AD的中点，则EB=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．3/4AB-1/4AC         	B．1/4AB-3/4AC        C．3/4AB+1/4AC         D.	1/4AB+3/4AC</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>7.某圆柱的高为2，地面周长为16，其三视图如右图，圆柱表面上的点M在正视图上的对应点为A，圆柱表面上的点N在左视图上的对应点为B，则在此圆柱侧面上，从M到N的路径中，最短路径的长度为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．217         	B．25       C．3         D.2</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>8.设抛物线C:y2=4x的焦点为F，过点（-2,0）且斜率为2/3的直线C与交于M,N两点，则FM乘FN</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A. 5 B. 6 C. 7 D. 8</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>9.已知函数f（x）=ex,g（x）=f（x）+x+a，若g（x）存在2个零点，则a的取值范围是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．[-1,0)  	B．[0,+00)     C．[-1,+00)     	D．[1,+00)</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>10.下图来自古希腊数学家希波克拉底所研究的几何图形，此图由三个半圆构成。三个半圆的直径分别为直角三角形ABC的斜边BC，直角边AB,BC，ABC的三边所围成的区域记为Ⅰ，黑色部分记为Ⅱ，其余部分记为Ⅲ。在整个图形中随机取一点，此点取自的概率分别记为p1,p2,p3,则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．    p1=p2      	B． p1=p3       C．      p2=p3  	D．p1=p2+p3</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>11.已知双曲线C:x2/3-y2=1，O为坐标原点，F为C的右焦点，过F的直线与C的两条渐近线的交点分别为MNN。若OMN为直角三角形，则|MN|</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．    3/2     	B． 3       C．     23  	D．4</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>12.已知正方体的棱长为1，每条棱所在直线与平面A所成的角都相等，则A截此正方体所得截面面积的最大值为</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．33/4	B．23/4	C．32/4	D．3/2   </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>二、填空题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>13.若x,y满足约束条件x-2y-2>=0,x-y+1>=0,y>=0，则z=3x+2y的最大值为     __________。       </p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>14.记Sn为数列an的前n项和，若Sn=2an+1，则S6=        __________。   </p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>15.从2位女生，4位男生中选3人参加科技比赛，且至少有1位女生入选，则不同的选法共有__________种.（用数字填写答案）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>16.已知函数f（x)=2sinx+sin2x，则f(x)的最小值是            .</p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>三、解答题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>17．（12分）在平面四边形中ABCD,角ADC=90,角A=45,AB=2,BD=5.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求cosADB</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若DC=22，求BC.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>18．（12分）如图，四边形ABCD为正方形，E,F分别为AD,BC的中点，以DF为折痕把DFC折起，使点C到达点的P位置，且PF垂直BF.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：平面PEF垂直平面ABFD;</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）求DP与平面ABCD所成角的正弦值</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>19．（12分）设椭圆C:x2/2+y2=1的右焦点为F，过F的直线l与C交于A,B两点，点M的坐标为（2,0）.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）当l与x轴垂直时，求直线AM的方程；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）设O为坐标原点，证明：角OMA=角OMB</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>20．（12分）某工厂的某种产品成箱包装，每箱200件，每一箱产品在交付用户之前要对产品作检验，如检验出不合格品，则更换为合格品。检验时，先从这箱产品中任取20件作检验，再根据检验结果决定是否对余下的所有产品作检验。设每件产品为不合格品的概率都为p（0p1），且各件产品是否为不合格品相互独立。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）记20件产品中恰有2件不合格品的概率为f（p），求f（p）的最大值点p0；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）现对一箱产品检验了20件，结果恰有2件不合格品，以（1）中确定的p0作为p的值。已知每件产品的检验费用为2元。若有不合格品进入用户手中，则工厂要对每件不合格品支付25元的赔偿费用。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>21．（12分）已知函数f（x）=1/x-x+alnx.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）讨论f（x）的单调性；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若f（x）存在两个极值点x1,x2，证明：f（x1）-f（x2）/x1-x2>a-2.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}></p>
            </div>
        )
    }
}
