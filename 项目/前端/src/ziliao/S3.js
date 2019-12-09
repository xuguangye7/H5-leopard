import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class S3 extends Component {
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
                ><h3>弧长及面积公式</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>弧长及面积公式</h3>
                    <p>(1)弧长公式：l=|a|r (a是圆心角且为弧度制)</p>
                    <p>(2)扇形面积公式：S=1/2lr(r是扇形半径)</p>
                </WingBlank>
            </div>
        )
    }
}
