import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class X1 extends Component {
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
                ><h3>向量的基本概念与运算</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>向量的基本概念与运算</h3>
                    <p>
                    1 向量的概念：
                    </p>
                    <span>
                    ①向量：既有大小又有方向的量 向量一般用 ……来表示，或用有向线段的起点与终点的大写字母表示，如：  几何表示法  ， ；坐标表示法    向量的大小即向量的模（长度），记作| | 即向量的大小，记作｜ ｜   
                    向量不能比较大小，但向量的模可以比较大小．<br/>
                    ②零向量：长度为0的向量，记为 ，其方向是任意的， 与任意向量平行 零向量 ＝  ｜ ｜＝0  由于 的方向是任意的，且规定 平行于任何向量，故在有关向量平行（共线）的问题中务必看清楚是否有“非零向量”这个条件．（注意与0的区别）<br/>
                    ③单位向量：模为1个单位长度的向量 
                    向量 为单位向量 ｜ ｜＝1 <br/>
                    ④平行向量（共线向量）：方向相同或相反的非零向量 任意一组平行向量都可以移到同一直线上 方向相同或相反的向量，称为平行向量 记作 ∥  由于向量可以进行任意的平移(即自由向量)，平行向量总可以平移到同一直线上，故平行向量也称为共线向量 
                    数学中研究的向量是自由向量，只有大小、方向两个要素，起点可以任意选取，现在必须区分清楚共线向量中的“共线”与几何中的“共线”、的含义，要理解好平行向量中的“平行”与几何中的“平行”是不一样的．<br/>
                    ⑤相等向量：长度相等且方向相同的向量 相等向量经过平移后总可以重合，记为  大小相等，方向相同 
                 </span>
                 <p>
                 2 向量加法
                 </p>
                 <span>
                 求两个向量和的运算叫做向量的加法 <br/>
                设 AB=b,BC=b，则 a+b =AB+BC =AC<br/>  
                （1）0+a=a+0=a ；<br/>（2）向量加法满足交换律与结合律；
                向量加法有“三角形法则”与“平行四边形法则”：<br/>
                （1）用平行四边形法则时，两个已知向量是要共始点的，和向量是始点与已知向量的始点重合的那条对角线，而差向量是另一条对角线，方向是从减向量指向被减向量 <br/>
                （2） 三角形法则的特点是“首尾相接”，由第一个向量的起点指向最后一个向量的终点的有向线段就表示这些向量的和；差向量是从减向量的终点指向被减向量的终点 
                当两个向量的起点公共时，用平行四边形法则；当两向量是首尾连接时，用三角形法则．向量加法的三角形法则可推广至多个向量相加：
                ，但这时必须“首尾相连”．
                 </span>
                 <p>
                 3 向量的减法 
                 </p>
                 <span>
                ① 相反向量：与 长度相等、方向相反的向量，叫做 的相反向量 
                记作 ,零向量的相反向量仍是零向量 
                关于相反向量有：  （i） = -（-a）=a； (ii)  a+( -a)=(-a )+ a= 0；
                (iii)若 a、b 是互为相反向量，则 a= -b, b=-a , a+ b=  0<br/>
                ②向量减法：向量 a加上b 的相反向量叫做 a与b 的差，
                记作：a-b=a+(-b) , 求两个向量差的运算，叫做向量的减法<br/>
                ③作图法： a-b可以表示为从 b的终点指向 a的终点的向量（ 、 有共同起点） 
                 </span>
                <p>
                4 实数与向量的积：
                </p>
                <span>
                ①实数λ与向量 的积是一个向量，记作λ ，它的长度与方向规定如下：
                （Ⅰ）λa=λ*a ；
                （Ⅱ）当 λ>0时，λ 的方向与 a的方向相同；当 λ小于0时，λ 的方向与a 的方向相反；当 λ=0时，λa=0 ，方向是任意的 <br/>
                ②数乘向量满足交换律、结合律与分配律 
                </span>
                <p>
                5 两个向量共线定理：
                </p>
                <span>
                向量 b与非零向量a 共线 有且只有一个实数λ ，使得 b= λa 
                </span>
                <p>
                6 平面向量的基本定理:
                </p>
                <span>
                如果 是一个平面内的两个不共线向量，那么对这一平面内的任一向量 ，有且只有一对实数 使： ，其中不共线的向量 叫做表示这一平面内所有向量的一组基底 
                </span>
                <p>
                7  特别注意:
                </p>
                <span>
                （1）向量的加法与减法是互逆运算 <br/>
                （2）相等向量与平行向量有区别，向量平行是向量相等的必要条件 <br/>
                （3）向量平行与直线平行有区别，直线平行不包括共线（即重合），而向量平行则包括共线（重合）的情况 <br/>
                （4）向量的坐标与表示该向量的有向线条的始点、终点的具体位置无关，只与其相对位置有关 <br/>
                <WhiteSpace/>
                学习本章主要树立数形转化和结合的观点，以数代形，以形观数，用代数的运算处理几何问题，特别是处理向量的相关位置关系，正确运用共线向量和平面向量的基本定理，计算向量的模、两点的距离、向量的夹角，判断两向量是否垂直等 由于向量是一新的工具，它往往会与三角函数、数列、不等式、解几等结合起来进行综合考查，是知识的交汇点

                </span>
                </WingBlank>
            </div>
        )
    }
}
