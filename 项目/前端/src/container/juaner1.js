import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class juaner1 extends Component {
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
                    2019年全国统一高考数学试卷（理科）（新课标）卷二
                </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"-10px",fontWeight:"bolder",marginLeft:"6px"}}>一、单选题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>1.已知集合A=（X2-5X+6>0）,B=（x-1>0）则A交B=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.（-00,1）B.（-2,1）C.（-3,-1）D.（3,+00）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>2．设z=–3+2i，则在复平面内z对应的点位于</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A. 第一象限 B.第二象限 C.第三象限 D.第四象限</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>3．已知AB=(2,3)，AC=(3，t)，BC=1，则AB~BC=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.-3  B.-2 C.2 D.3</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>4．2019年1月3日嫦娥四号探测器成功实现人类历史上首次月球背面软着陆，我国航天事业取得又一重大成就，实现月球背面软着陆需要解决的一个关键技术问题是地面与探测器的通讯联系．为解决这个问题，发射了嫦娥四号中继星“鹊桥”，鹊桥沿着围绕地月拉格朗日点的轨道运行．点是平衡点，位于地月连线的延长线上．设地球质量为M１，月球质量为M２，地月距离为R，点到月球的距离为r，根据牛顿运动定律和万有引力定律，r满足方程：.设，由于的值很小，因此在近似计算中，则r的近似值为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．M2/M1 R	B．M2/2M1 R	C．3M2/M1 R	D．M2/3M1 R</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>5．演讲比赛共有9位评委分别给出某选手的原始评分，评定该选手的成绩时，从9个原始评分中去掉1个最高分、1个最低分，得到7个有效评分．7个有效评分与9个原始评分相比，不变的数字特征是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．中位数	B．平均数	C．方差  	D．极差</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>6．若a>b，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．ln(a−b)>0        	B．3a>3b         C．a3−b3>0       	D．│a│>│b│</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>7．设α，β为两个平面，则α∥β的充要条件是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．α内有无数条直线与β平行          	B．α内有两条相交直线与β平行     C．α，β平行于同一条直线             	D．α，β垂直于同一平面</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>8．若抛物线y2=2px(p>0)的焦点是椭圆x2/3p+y2/p=1的一个焦点，则p=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．2	B．3	C．4	D．8</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>9．下列函数中，以π/2为周期且在区间(π/4，π/2)单调递增的是</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．f(x)=│cos2x│    	B．f(x)=│sin2x│     C．f(x)=cos│x│     	D．f(x)=sin│x│</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>10．已知α∈(0，π/2)，2sin2α=cos2α+1，则sinα=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．    1/5      	B． 5/5       
C．      3/3   	D．25/5</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>11．设F为双曲线C：x2/a2-y2/b2=1的右焦点，O为坐标原点，以OF为直径的圆与圆x2+y2=a2交于P，Q两点．若PQ=OF，则C的离心率为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．2	B．3	C．2	D．5</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>12．设函数f（x）的定义域为R，满足f（x+1）=2f（x），且当x(0,1]时，f（x）=x（x-1）．若对任意x，都有f（x）>-8/9，则m的取值范围是</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．(-00,9/4]	B．(-00,7/3]	C．(-00,5/2]	D．(-00,8/3]                   </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>二、填空题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>13．我国高铁发展迅速，技术先进．经统计，在经停某站的高铁列车中，有10个车次的正点率为0.97，有20个车次的正点率为0.98，有10个车次的正点率为0.99，则经停该站高铁列车所有车次的平均正点率的估计值为__________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>14．已知f（x）是奇函数，且当0>x时，f（x）=-eax.若f（ln2）=8，则a=__________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>15．三角形ABC的内角A,B,C的对边分别为a,b,c.若b=6,a=2c,B=60，则三角形ABC的面积为_________．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>16．中国有悠久的金石文化，印信是金石文化的代表之一．印信的形状多为长方体、正方体或圆柱体，但南北朝时期的官员独孤信的印信形状是“半正多面体”（图1）．半正多面体是由两种或两种以上的正多边形围成的多面体．半正多面体体现了数学的对称美．图2是一个棱数为48的半正多面体，它的所有顶点都在同一个正方体的表面上，且此正方体的棱长为1．则该半正多面体共有________个面，其棱长为_________．（本题第一空2分，第二空3分．）</p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>三、应用题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>17．（12分）如图，长方体ABCD–A1B1C1D1的底面ABCD是正方形，点E在棱AA1上，BE⊥EC1．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：BE⊥平面EB1C1；；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若AE=A1E，求二面角B–EC–C1的正弦值．</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>18．（12分）11分制乒乓球比赛，每赢一球得1分，当某局打成10:10平后，每球交换发球权，先多得2分的一方获胜，该局比赛结束.甲、乙两位同学进行单打比赛，假设甲发球时甲得分的概率为0.5，乙发球时甲得分的概率为0.4，各球的结果相互独立.在某局双方10:10平后，甲先发球，两人又打了X个球该局比赛结束.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求P（X=2）；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）求事件“X=4且甲获胜”的概率.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>19．（12分）已知数列an和bn满足a1=1，b1=0，4an+1=3an-bn+4，4bn+1=3bn-an-4.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：an+bn是等比数列，an–bn是等差数列；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）求an和bn的通项公式.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>20．（12分）已知函数f（x）=lnx-x+1/x-1.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）讨论f(x)的单调性，并证明f(x)有且仅有两个零点；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）设x0是f(x)的一个零点，证明曲线y=lnx在点A(x0，lnx0)处的切线也是曲线y=ex的切线.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>21．（12分）已知点A(−2,0)，B(2,0)，动点M(x,y)满足直线AM与BM的斜率之积为−1/2.记M的轨迹为曲线C.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求C的方程，并说明C是什么曲线；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）过坐标原点的直线交C于P，Q两点，点P在第一象限，PE⊥x轴，垂足为E，连结QE并延长交C于点G.（i）证明：PQG是直角三角形；（ii）求PQG面积的最大值.</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}></p>
            </div>
        )
    }
}
