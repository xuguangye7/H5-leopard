import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class J1 extends Component {
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
                ><h3>解三角</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>解三角形</h3>
                    <p>
                    1．解三角形：一般地，把三角形的三个角和它们的对边叫做三角形的元素。已知三角形的几个元素求其他元素的过程叫作解三角形。
                    </p>
                    <span>
                    以下若无特殊说明，均设三角形ABC 的三个内角 A,B,C的对边分别为 a,b,c，则有以下关系成立：
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    （1）边的关系：a+b>c ，a+c>b ，b+c>a （即满足：两条较短的边长之和大于较长边）
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    （2）角的关系：
                    </span><br/>
                    <span style={{marginLeft:'50px'}}>
                    A+B+C=π，
                    </span><br/>
                    <span style={{marginLeft:'50px'}}>
                    A,B,C均大于0小于π，
                    </span><br/>
                    <span style={{marginLeft:'50px'}}>
                    A+B大于0，小于π
                    </span><br/>
                    <span style={{marginLeft:'50px'}}>
                    A-B大于-π，小于π
                    </span><br/>
                    <span style={{marginLeft:'50px'}}>
                    sin（A+B)=sinC
                    </span><br/>
                    <span style={{marginLeft:'30px'}}>
                    （3）边角关系：正弦定理、余弦定理以及它们的变形
                    </span>
                    <h3>
                    板块一：正弦定理及其应用
                    </h3>
                    <p>
                    正弦定理适用于两类解三角形问题：
                    </p>
                    <span>
                    （1）已知三角形的任意两角和一边，先求第三个角，再根据正弦定理求出另外两边；<br/>
                    （2）已知三角形的两边与其中一边所对的角，先求另一边所对的角（注意此角有两解、一解、无解
                    的可能），再计算第三角，最后根据正弦定理求出第三边
                    </span>
                    <h3>
                    板块二：余弦定理及面积公式
                    </h3>
                    <p>
                    余弦定理及其变式可用来解决以下两类三角形问题：
                    </p>
                    <span>
                    （1）已知三角形的两边及其夹角，先由余弦定理求出第三边，再由正弦定理求较短边所对的角（或由余弦定理求第二个角），最后根据“内角和定理”求得第三个角；<br/>
                    （2）已知三角形的三条边，先由余弦定理求出一个角，再由正弦定理求较短边所对的角（或由余弦定理求第二个角），最后根据“内角和定理”求得第三个角；<br/>
                    说明：为了减少运算量，能用正弦定理就尽量用正弦定理解决
                    </span>
                    <h3>
                    板块三：解三角形综合问题
                    </h3>
                    <p>此时要灵活运用正弦余弦的相关知识</p>
                </WingBlank>
            </div>
        )
    }
}
