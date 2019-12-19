import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class juanwu extends Component {
    render() {
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='/app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>历年真题</h3></NavBar>
                <p style={{fontSize:"18px",textAlign:"center",fontWeight:"bolder",marginTop:"15px"}}>
                    2018年全国统一高考数学试卷（理科）（新课标）卷二
                </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"-10px",fontWeight:"bolder",marginLeft:"6px"}}>一、单选题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>1.已知集合M=（-4,2）,N=（x2-x-6>0）则M交N=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.（-4,3）B.（-4,2）C.（-2,2）D.（2,3）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>2．设复数z满足|z-i|=1，z在复平面内对应的点为(x，y)，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",marginLeft:"16px"}}>A.(x+1)2+y2=1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-5px",marginLeft:"60px"}}>B.(x-1)2+y2=1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-10px",marginLeft:"16px"}}>C.x2+(y-1)2=1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"-10px",marginLeft:"60px"}}>D.x2+(y+1)2=1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>3．已知a=log20.2,b=20.2,c=0.20.3，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.c>b>a  B.b>c>a C.b>a>c D.a>c>b</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>4．古希腊时期，人们认为最美人体的头顶至肚脐的长度与肚脐至足底的长度之比是（≈0.618，称为黄金分割比例)，著名的“断臂维纳斯”便是如此．此外，最美人体的头顶至咽喉的长度与咽喉至肚脐的长度之比也是．若某人满足上述两个黄金分割比例，且腿长为105cm，头顶至脖子下端的长度为26 cm，则其身高可能是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．165 cm	B．175 cm	C．185 cm	D．190cm</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>6．我国古代典籍《周易》用“卦”描述万物的变化．每一“重卦”由从下到上排列的6个爻组成，爻分为阳爻“——”和阴爻“— —”，如图就是一重卦．在所有重卦中随机取一重卦，则该重卦恰有3个阳爻的概率是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．5/16	B．11/32	C．21/32	D．11/16</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>7．已知非零向量a，b满足|a|=2|b|，且（a–b）b，则a与b的夹角为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．30	B．60	C．120	D．150</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>8．如图是求1/2+1/2+1/2的程序框图，图中空白框中应填入</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．A=1/2+A	B．A=2+1/A	C．A=1/1+2A	D．A=1+1/2A</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>9．记为Sn等差数列An的前n项和．已知S4=0,a5=5，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．an=2n-5	B．an=3n-5	C．Sn=2n2-8n	D．Sn=1/2n2-2n</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>10．已知椭圆C的焦点为(-1,0)(1,0)，过F2的直线与C交于A，B两点.若AF2=2F2B，AB=BF1，则C的方程为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．x2/2+y2=1	B．x2/3+y2/2=1	C．x2/4+y2/3=1	D．x2/5+y2/4=1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>11．关于函数f(x)=sinx+cos(x)有下述四个结论：
①f(x)是偶函数        ②f(x)在区间（90,180）单调递增
③f(x)在[-180,180]有4个零点    ④f(x)的最大值为2
其中所有正确结论的编号是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．①②④	B．②④	C．①④	D．①③</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>12．已知三棱锥P-ABC的四个顶点在球O的球面上，PA=PB=PC，△ABC是边长为2的正三角形，E，F分别是PA，PB的中点，∠CEF=90°，则球O的体积为</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．86π	B．46π	C．26π	D．6π                   </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>二、填空题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>13．曲线y=3(x2+x)ex在点(0,0)处的切线方程为___________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>14．记Sn为等比数列an的前n项和．若a1=1/3,a42=a6，则S5=____________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>15．甲、乙两队进行篮球决赛，采取七场四胜制（当一队赢得四场胜利时，该队获胜，决赛结束）．根据前期比赛成绩，甲队的主客场安排依次为“主主客客主客主”．设甲队主场取胜的概率为0.6，客场取胜的概率为0.5，且各场比赛结果相互独立，则甲队以4∶1获胜的概率是____________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>16．已知双曲线C：x2/a2-y2/b2=1的左、右焦点分别为F1，F2，过F1的直线与C的两条渐近线分别交于A，B两点．若F1A=AB，F1B~F2B=0，则C的离心率为____________．</p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>三、应用题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>17．三角形ABC的内角A，B，C的对边分别为a，b，c，设（sinB-sinC）2=sin2A-sinBsinC．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求A；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若2a+b=2c，求sinC．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>18．如图，直四棱柱ABCD–A1B1C1D1的底面是菱形，AA1=4，AB=2，∠BAD=60°，E，M，N分别是BC，BB1，A1D的中点．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：MN∥平面C1DE；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）求二面角A-MA1-N的正弦值．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>19．已知抛物线C：y2=3x的焦点为F，斜率为1.5的直线l与C的交点为A，B，与x轴的交点为P.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）若|AF|+|BF|=4，求l的方程；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若AP=3PB，求|AB|．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>20．已知函数f（x）=sinx-ln（1+x），f（x）为（x）的导数．证明：</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）f（x）在区间(-1,π/2)存在唯一极大值点；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）f（x）有且仅有2个零点．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>21．为了治疗某种疾病，研制了甲、乙两种新药，希望知道哪种新药更有效，为此进行动物试验．试验方案如下：每一轮选取两只白鼠对药效进行对比试验．对于两只白鼠，随机选一只施以甲药，另一只施以乙药．一轮的治疗结果得出后，再安排下一轮试验．当其中一种药治愈的白鼠比另一种药治愈的白鼠多4只时，就停止试验，并认为治愈只数多的药更有效．为了方便描述问题，约定：对于每轮试验，若施以甲药的白鼠治愈且施以乙药的白鼠未治愈则甲药得1分，乙药得-1分；若施以乙药的白鼠治愈且施以甲药的白鼠未治愈则乙药得1分，甲药得-1分；若都治愈或都未治愈则两种药均得0分．甲、乙两种药的治愈率分别记为α和β，一轮试验中甲药的得分记为X．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求X的分布列；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若甲药、乙药在试验开始时都赋予4分，p（i=0,1~8）表示“甲药的累计得分为i时，最终认为甲药比乙药更有效”的概率，则p0=0，p8=1．假设a=0.5，b=0.8．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}></p>
            </div>
        )
    }
}
