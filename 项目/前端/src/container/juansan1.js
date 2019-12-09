import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class juansan1 extends Component {
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
                    2019年全国统一高考数学试卷（理科）（新课标）卷三
                </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"-10px",fontWeight:"bolder",marginLeft:"6px"}}>一、单选题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>1.已知集合A=（-1,0,1,2）,B=（1>=x2）则A交B=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.（-1,0,1）B.（0,1）C.（-1,1）D.（0,1,2）</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>2.若z（1+i）=2i，则z=</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A. -1-i B.-1+i C.1-i D.1+i</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>3．《西游记》《三国演义》《水浒传》和《红楼梦》是中国古典文学瑰宝，并成为中国古典小说四大名著。某中学为了了解本小学生阅读四大名著的情况，随机调查看了100位学生，期中阅读过《西游记》或《红楼梦》的学生共有90位，阅读过《红楼梦》的学生共有80位，阅读过《西游记》且阅读过《红楼梦》的学生共有60位，则该学校阅读过《西游记》的学生人数与该学校学生总数比值的估计值为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A.0.5  B.0.6 C.0.7 D.0.8</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>4.（1+2x2）（1+x）2的展开式中的x3系数为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．12	B．16	C．20	D．24</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>5.已知各项均为正数的等比数列 an的前4项和为15，且a3=3a5+4a1 ，则a3</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．16	B．8	C．4  	D．2</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>6.已知曲线y=aex+xlnx在点（1，ae）处的切线方程为y=2x+b，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．a=e，b=-1         	B．a=e，b=1         C．a=e-1 ，b=1         	D．a=e-1 ，b=-1</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>8．如图，点NN为正方形ABCD的中心，三角形EDC为正三角形，平面EDC垂直平面ABCD，M为线段ED的中心，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．BM=EN，且直线BM,EN是相交直线	B．BM不=EN，且直线BM,EN是相交直线	C．BM=EN，且直线BM,EN是异面直线	D．BM不=EN，且直线BM,EN是异面直线</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>9．执行右面的程序框图，如果输入的e为0.01，则输出的值等于</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．2-1/24   	B．2-1/25     C．2-1/26      	D．2-1/27</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>10.双曲线C:x2/4-y2/2=1的右焦点为F,点P 在C 的一条渐近线上,O为坐标原点,若PO=PF,则△PFO 的面积为</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．    32/4      	B． 32/2       C．      22   	D．32</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>11．设f（x）是定义域为R的偶函数，且在（0，+00）单调递减，则</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．f（log31/4）>f（2-3/2）>f（2-2/3）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>B．f（log31/4）>f（2-2/3）>f（2-3/2）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>C．f（2-3/2）>f（2-2/3）>f（log31/4）	</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>D．f（2-2/3）>f（2-3/2）>f（log31/4）</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>12．设函数f（x）=sin（wx+π/5）,已知f（x）在[0,2π]有且仅有5个零点。下述四个结论：</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>① f (x)在（0,2π）有且仅有3个极大值点	</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>② f (x)在（0,2π）有且仅有2个极小值点</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>③ f (x)在（0,π/10）单调递增</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>④ w的取值范围是[12/5,29/10)</p>
                <p style={{width:"300px",fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"16px"}}>A．①④	B．②③	C．①②③	D．①③④   </p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>二、填空题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>13. 已知a、b为单位向量，且a·b = 0，若c=2a-5b，则cos(a,c)________。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>14. 记Sn为等差数列an的前n项和，若a1不=0,a2=3a1，则S10/S5=_________。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>15. 设F1、F2为椭圆C:x2/36+y2/20=1的两个焦点，M为C上一点且在第一象限。若三角形MF1F2为等腰三角形，则M的坐标为__________。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>16. 学生到工厂劳动实践，利用3D打印技术制作模型。如图，该模型为长方体ABCD-A1B1C1D1挖去四棱锥O-EFGH后所得的几何体，其中O为长方体的中心，E、F、G、H分别为所在棱的中点，AB = BC = 6 cm，AA1 = 4 cm，3D打印所用原料密度为0.9g/cm3。不考虑打印损耗，制作该模型所需原料的质量为_________ g。</p>
                <p style={{fontSize:"16px",float:"left",marginTop:"0px",fontWeight:"bolder",marginLeft:"6px"}}>三、解答题</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>17．（12分）为了解甲、乙两种离子在小鼠体内的残留程度，进行如下试验：将200只小鼠随机分成A、B两组，每组100只，其中A组小鼠给服甲离子溶液，B组小鼠给服乙离子溶液。每只小鼠给服的溶液体积相同、摩尔浓度相同。经过一段时间后用某种科学方法测算出残留在小鼠体内离子的百分比。根据试验数据分别得到如图所示直方图。记C为事件：“乙离子残留在体内的百分比不低于5.5”，根据直方图得到P(C)的估计值为0.70。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求乙离子残留百分比直方图中a、b的值</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）分别估计甲、乙离子残留百分比的平均值（同一组中的数据用该组区间的中点值为代表）。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>18．（12分）△ABC的内角A、B、C的对边分别为a、b、c。已知asinA+C/2=bsinA</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）求B；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若△ABC为锐角三角形，且c = 1，求△ABC面积的取值范围</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>19．（12分）图1是由矩形ADEB、Rt△ABC和菱形BFGC组成的一个平面图形，其中AB = 1，BE = BF = 2，角FBC=60	。将其沿AB、BC折起使得BE与BF重合，连结DG，如图2。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：图2中的A、C、G、D四点共面，且平面ABC垂直平面BCGE；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）求图2中的二面角B-CG-A的大小。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>20．（12分）已知函数f（x）=2x3-ax2+b</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）讨论f(x)的单调性；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）是否存在a、b，使得f (x)在区间[0,1]的最小值为-1且最大值为1？若存在，求出a、b的所有值；若不存在，说明理由</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}>21．（12分）已知曲线C:y=x2/2，D为直线y=-1/2上的动点，过D作C的两条切线，切点分别为A、B。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（1）证明：直线AB过定点；</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"0px",marginLeft:"6px"}}>（2）若以E（0,5/2）为圆心的圆与直线AB相切，且切点为线段AB的中点，求四边形ADBE的面积。</p>
                <p style={{fontSize:"14px",float:"left",marginTop:"100px",marginLeft:"6px"}}></p>
            </div>
        )
    }
}
