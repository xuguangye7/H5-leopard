import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,SearchBar, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default class Talk extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/home'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >社区</NavBar>
                {/* <div style={{width:'100%',
                    background:'url(img/sx.jpg) center center /  100% 180px no-repeat',
                    height:'180px',
                    textAlign:'center',
                    lineHeight:'180px',
                    color:'blue',
                    fontSize:'30px'
                }}>
                    欢迎来到数学圣地
                </div> */}
                <SearchBar 
                  placeholder="圆锥曲线"
                  ref={ref => this.manualFocusInst = ref}
                  style={{
                    backgroundColor:'rgb(8, 217, 245)',

                  }}
                />
                <WhiteSpace/>
                <WingBlank>
                    {
                        [0,1].map((item)=>
                            <li key={item} style={{}}>
                                <img src={`img/shuxue${item}.jpg`} style={{height:'40px',width:'40px',float:'left'}}/>
                                <span style={{lineHeight:'20px',textAlign:'center',marginLeft:'10px',marginRight:'10px'}}>我是学霸</span>
                                <br/><br/>
                                <p>这道题这么简单都不会，还学什么习，回家种田吧</p>
                                <button style={{marginLeft:'30%',background:'white',border:'1px solid white'}}>点赞</button>
                                <button style={{marginLeft:'10%',background:'red',border:'1px solid red'}}>关注</button>
                                <hr/>
                            </li>
                        )
                    }
                </WingBlank>
                <input type='text'/>
                <Footer/>
            </div>
        )
    }
}
