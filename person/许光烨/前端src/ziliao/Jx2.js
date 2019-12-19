import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Zhixian extends Component {
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
                ><h3>解析几何</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>直线</h3>
                    <h4>一、直线的倾斜角与斜率</h4>
                    <p>1.倾斜角α</p>
                    <span>(1)定义：直线l向上的方向与x轴正向所成的角叫做直线的倾斜角。</span><br/>
                    <span>(2)范围：大于等于零度，小于等于180度 </span>
                    <p>2.斜率：直线倾斜角α的正切值叫做这条直线的斜率：k=tanα</p>
                    <span>(1)倾斜角为90°的直线没有斜率。</span><br/>
                    <span>(2)每一条直线都有唯一的倾斜角，但并不是每一条直线都存在斜率（直线垂直于x轴时，其斜率不存在)，这就决定了我们在研究直线的有关问题时，应考虑到斜率的存在与不存在这两种情况，否则会产生漏解。</span><br/>
                    <span>（3）设经过A(x1,y1)和B(X2,Y2)两点的直线的斜率为k，则当x1不等于x2时，k=tanα=y1-y2/x1-x2；当x1=x2时，α=90度；斜率不存在；</span><br/>
                    <span></span><br/>
                    <h4>二、直线的方程</h4>
                    <p>1.点斜式：已知直线上一点P（x0,y0）及直线的斜率k（倾斜角α）求直线的方程用点斜式：y-y0=k(x-x0)</p>
                    <p>注意：当直线斜率不存在时，不能用点斜式表示，此时方程为 ；</p>
                    <p>2.斜截式：若已知直线在 轴上的截距（直线与y轴焦点的纵坐标）为b，斜率为k，则直线方程：y=kx+b；特别地，斜率存在且经过坐标原点的直线方程为：y=kx</p>
                    <p>注意：正确理解“截距”这一概念，它具有方向性，有正负之分，与“距离”有区别。</p>
                    <p>3.两点式：若已知直线经过(x1,y1)和(x2,y2)两点，且（x1不等于x2,y1不等于y2,则直线的方程：y-y1/y2-y1=x-x1/x2-x1；</p>
                    <p>注意：①不能表示与x轴和y轴垂直的直线；</p>
                    <p>4截距式：若已知直线在x轴，y轴上的截距分别是a，b（a不等于0,b不等于0）则直线方程：x/a+y/a=1</p>
                    <p>注意：1）.截距式方程表不能表示经过原点的直线，也不能表示垂直于坐标轴的直线。</p>
                    <p>2）.横截距与纵截距相等的直线方程可设为x+y=a;横截距与纵截距互为相反数的直线方程可设为x-y=a</p>
                    <p>5一般式：任何一条直线方程均可写成一般式：Ax+By+C=0；（ 不同时为零）；反之，任何一个二元一次方程都表示一条直线。</p>
                    <p>注意：①直线方程的特殊形式，都可以化为直线方程的一般式，但一般式不一定都能化为特殊形式，这要看系数 是否为0才能确定。</p>
                    <h4>三、两条直线的位置关系</h4>
                    <img src="../img/zhixianweizhi.png" style={{width:'100%'}}/>
                    <h4>四、两直线的交角</h4>
                    <p>（1）l1到l2的角：把直线l1依逆时针方向旋转到与l2重合时所转的角；它是有向角，其范围是大于0小于180度；</p>
                    <p>注意：① l1到l2的角与l2到l1的角是不一样的；②旋转的方向是逆时针方向；③绕“定点”是指两直线的交点。</p>
                    <p></p>
                    <p></p>
                    <h4>五、点到直线的距离公式：</h4>
                    <p>1.点P(x0,y0)到直线l：Ax+By+C=0的距离为：d</p>
                    <p>两平行线l1：Ax+By+C1=0，l2：Ax+By+C2=0的距离为：d</p>
                </WingBlank>
            </div>
        )
    }
}
