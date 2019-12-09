import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Dao3 extends Component {
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
                ><h3>导数的应用</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>导数的应用</h3>
                    <h4>函数的单调性与导数</h4>
                    <p>
                    如果 f`(x)>0  ，则f(x) 在此区间上为增函数；
                    </p>
                    <p>如果 f`(x)小于0 ，则f(x) 在此区间上为减函数。</p>
                    <h4>函数的极点与极值</h4>
                    <span>
                    ①如果在 x0附近的左侧 f`(x)＞0，右侧 f`(x)＜0，那么f(x0) 是极大值；<br/>
                    ②如果在 x0附近的左侧 f`(x)＜0，右侧 f`(x)＞0，那么f(x0) 是极小值.

                    </span>
                    <h4>函数的最值</h4>
                    <span>
                    一般地，在区间[a,b] 上连续的函数f(x) 在 [a,b]上必有最大值与最小值。函数f(x)在区间[a,b]上的最值，只能在区间的端点及极值出取得    
                    </span>
                </WingBlank>
            </div>
        )
    }
}
