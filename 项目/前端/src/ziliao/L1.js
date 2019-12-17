import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class L1 extends Component {
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
                ><h3>几种立体几何的特征</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>立体几何</h3>
                    <p>(1)棱柱：</p>
                    <span style={{marginLeft:"30px"}}>
                    几何特征：两底面是对应边平行的全等多边形；侧面、对角面都是平行四边形；侧棱平行且相等；平行于底面的截面是与底面全等的多边形。
                    </span>
                    <p>(2)棱锥</p>
                    <span style={{marginLeft:'30px'}}>
                    几何特征：侧面、对角面都是三角形；平行于底面的截面与底面相似，其相似比等于顶点到截面距离与高的比的平方。
                    </span>
                    <p>(3)棱台</p>
                    <span style={{marginLeft:'30px'}}>
                    几何特征：
                    </span><br/>
                    <span style={{margin:'60px'}}>
                    ①上下底面是相似的平行多边形 
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ②侧面是梯形
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ③侧棱交于原棱锥的顶点
                    </span>
                    <p>(4)圆柱</p>
                    <span style={{marginLeft:'30px'}}>
                    几何特征：
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ①底面是全等的圆；
                    </span><br/>
                    <span style={{marginLeft:'60PX'}}>
                    ②母线与轴平行；
                    </span><br/>
                    <span style={{marginLeft:'60PX'}}>
                    ③轴与底面圆的半径垂直；
                    </span><br/>
                    <span style={{marginLeft:'60PX'}}>
                    ④侧面展开图是一个矩形
                    </span>
                    <p>(5)圆锥</p>
                    <span style={{marginLeft:'30px'}}>
                    几何特征：
                    </span><br/>
                    <span style={{margin:'60px'}}>
                    ①底面是一个圆 
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ②母线交于圆锥的顶点；
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ③侧面展开图是一个扇形。
                    </span>
                    <p>(6)圆台</p>
                    <span style={{marginLeft:'30px'}}>
                    几何特征：
                    </span><br/>
                    <span style={{margin:'60px'}}>
                    ①上下底面是两个圆；
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ②侧面母线交于原圆锥的顶点；
                    </span><br/>
                    <span style={{marginLeft:'60px'}}>
                    ③侧面展开图是一个弓形。
                    </span>
                </WingBlank>
            </div>
        )
    }
}
