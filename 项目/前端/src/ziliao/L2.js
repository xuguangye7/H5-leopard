import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class L2 extends Component {
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
                ><h3>空间中的位置关系</h3></NavBar>
                <WhiteSpace/> 
                <WingBlank>
                    <h3>空间中的位置关系</h3>
                    <p>公理1：如果一条直线的两点在一个平面内，那么这条直线是所有的点都在这个平面内。</p>
                    <span style={{marginLeft:'30px'}}>应用： 判断直线是否在平面内</span>
                    <p>公理2：如果两个不重合的平面有一个公共点,那么它们有且只有一条过该点的公共直线</p>
                    <span style={{marginLeft:'30px'}}>作用:</span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ①它是判定两个平面相交的方法。
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ②它说明两个平面的交线与两个平面公共点之间的关系：交线必过公共点。
                    </span><br/>
                    <span style={{marginLeft:'60PX'}}>
                    ③它可以判断点在直线上，即证若干个点共线的重要依据
                    </span>
                    <p>公理3：经过不在同一条直线上的三点，有且只有一个平面。</p>
                    <span style={{marginLeft:'30px'}}>作用:</span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ①它是空间内确定平面的依据
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ②它是证明平面重合的依据
                    </span><br/>
                    <p>公理4：平行于同一条直线的两条直线互相平行空间直线与直线之间的位置关系</p>
                </WingBlank>
            </div>
        )
    }
}
