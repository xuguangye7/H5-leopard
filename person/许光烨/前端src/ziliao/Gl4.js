import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
import H3 from './H3'
export default class Jihe extends Component {
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
                ><h3>几何概型</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>几何概型</h3>
                    <p>1）几何概率模型：如果每个事件发生的概率只与构成该事件区域的长度（面积或体积）成比例，则称这样的概率模型为几何概率模型；</p>
                    <p>2）几何概型的概率公式：</p>
                    <p>①求出总的基本事件数；</p>
                    <p>②求出事件A所包含的基本事件数，然后利用公式</p>
                    <p>P（A）= A包含的基本事件数/总的基本事件个数</p>
                    <p>P（A）= 构成事件A的区域长度（面积或体积）/试验的全部结果所构成的区域长度（面积或体积）</p>
                    <p>3）几何概型的特点：</p>
                    <p>1）试验中所有可能出现的结果（基本事件）有无限多个；</p>
                    <p>2）每个基本事件出现的可能性相等．</p>
                </WingBlank>
            </div>
        )
    }
}
