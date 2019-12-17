import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Gl1 extends Component {
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
                ><h3>概率的基本概念</h3></NavBar>
                <WingBlank>
                    <WhiteSpace/>
                    <h3>抽样方法</h3>
                    <p>1．简单随机抽样</p>
                    <p>2.简单随机抽样常用的方法：（1）抽签法；⑵随机数表法。</p>
                    <p>3．系统抽样：K（抽样距离）=N（总体规模）/n（样本规模）</p>
                    <p>4．分层抽样</p>
                    <span>
                    1他们都是统计系统各元件发生的可能性大小；<br/>
                    2、频率一般是大概统计数据经验值，概率是系统固有的准确值；<br/>
                    3频率是近似值，概率是准确值<br/>

                    4、频率值一般容易得到，所以一般用来代替概率<br/>
                    进行定量分析，首先要知道系统各元件发生故障的频率或概率。
                    事件的频率与概率是度量事件出现可能性大小的两个统计特征数。
                    <br/>
                    频率是个试验值，或使用时的统计值，具有随机性，可能取多个数值。因此，只能近似地反映事件出现可能性的大小
                    <br/>
                    概率是个理论值，是由事件的本质所决定的，只能取唯一值，它能精确地反映事件出现可能性的大小

                    <br/>
                    虽然概率能精确反映事件出现可能性的大小，但它通过大量试验才能得到，这在实际工作中往往是难以做到的。所以，从应用角度来看，频率比概率更有用，它可以从所积累的比较多的统计资料中得到
                    <br/>
                    需要指出的是用频率代替概率，并不否认概率能更精确、更全面地反映事件出现可能性的大小，只是由于在目前的条件下，取得概率比取得频率更为困难。
                    所以，我们才用频率代替概率，以概率的计算方法来计算频率

                    </span>
                </WingBlank>
            </div>
        )
    }
}
