import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Gl2 extends Component {
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
                ><h3>概率的基本性质</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>基本性质</h3>
                    <span>
                    （1）必然事件概率为1，不可能事件概率为0，因此0≤P(A)≤1；<br/>
                    （2）当事件A与B互斥时，满足加法公式：P(A∪B)= P(A)+ P(B)；<br/>
                    （3）若事件A与B为对立事件，则A∪B为必然事件，所以P(A∪B)= P(A)+ P(B)=1，于是有P(A)=1—P(B)；<br/>
                    （4）互斥事件与对立事件的区别与联系，互斥事件是指事件A与事件B在一次试验中不会同时发生，其具体包括三种不同的情形：<br/>
                    </span>
                    <span style={{marginLeft:'30px'}}>
                    （1）事件A发生且事件B不发生；<br/>
                    </span>
                    <span style={{marginLeft:'30px'}}>
                    （2）事件A不发生且事件B发生；<br/>
                    </span>
                    <span style={{marginLeft:'30px'}}>
                    （3）事件A与事件B同时不发生，而对立事件是指事件A	与事件B有且仅有一个发生，其包括两种情形；<br/>
                    </span>
                    <span style={{margin:'60px'}}>
                    （1）事件A发生B不发生；<br/>
                    </span>
                    <span style={{marginLeft:'60px'}}>
                    （2）事件B发生事件A不发生，对立事件互斥事件的特殊情形。
                    </span>
                </WingBlank>
            </div>
        )
    }
}
