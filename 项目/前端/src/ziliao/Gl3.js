import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
import H3 from './H3'
export default class Gudian extends Component {
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
                ><h3>古典概型</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>古典概型</h3>
                    <p>（1）古典概型的使用条件：试验结果的有限性和所有结果的等可能性。</p>
                    <p>（2）古典概型的解题步骤；</p>
                    <p>①求出总的基本事件数；</p>
                    <p>②求出事件A所包含的基本事件数，然后利用公式</p>
                    <p>P（A）= A包含的基本事件数/总的基本事件个数</p>
                </WingBlank>
            </div>
        )
    }
}
