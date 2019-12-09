import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,SearchBar, Tabs,Badge, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
const tabs = [
    { title: <Badge>推荐</Badge> },
    { title: <Badge>今日任务</Badge> },
];
export default class Home extends Component {
    render() {
        return (
            <div style={{
              backgroundColor:''
            }}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>数学天地</h3></NavBar>
                <SearchBar 
                  placeholder="在这里搜索知识点"
                  ref={ref => this.manualFocusInst = ref}
                  style={{
                    backgroundColor:'rgb(8, 217, 245)',
                  }}
                />
                <div style={{width:'100%',
                    position:'relative',
                    height:'30%',
                    margin:'0 auto',
                }}>
                    <img src='../img/lantian.jpg' style={{
                        width:'100%',
                        borderRadius:'0 0 5% 5%',
                        zIndex:'-1',
                        opacity:'0.7',
                        top:'0',
                    }} />
                </div>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:'100%',height:'100px',borderRadius:'10px',background:'#fff'}}>
                        <Link to='/ziliao'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle5.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>专题</span>
                            </div>
                        </Link>
                        <Link to='/zhenti'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle1.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>真题</span>
                            </div>
                        </Link>
                        <Link to='/fangfa'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle4.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>方法</span>
                            </div>
                        </Link>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{width:'100%',height:'100px',borderRadius:'10px',background:'#fff'}}>
                        <Link to='/gongshi'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle6.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>记公式</span>
                            </div>
                        </Link>
                        <Link to='/book'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle7.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>参考书</span>
                            </div>
                        </Link>
                        <Link to='/zhengce'>
                            <div style={{width:'33%',float:'left',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle9.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '13px',color:'#3fcccb'
                                }}>政策</span>
                            </div>
                        </Link>
                    </div>
                </WingBlank>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                }}>
                    <NavBar
                    style={{backgroundColor:'rgb(8, 217, 245)',height:'40px'}}
                    leftContent={[
                        <span>真题推荐</span>
                    ]}
                    rightContent={[
                        <Link to='/zhenti'>
                            <span style={{color:'white'}}>更多>></span>
                        </Link>
                    ]}
                    ></NavBar>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        background:'#fff'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juanyi'>
                            <span style={{float:'right',lineHeight:'100px',marginRight:'10%'}}>2019全国高考卷数学一卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        background:'#fff'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juaner'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%'}}>2019全国高考卷数学二卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        background:'#fff'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juansan'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%'}}>2019全国高考卷数学三卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        background:'#fff'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juansi'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%'}}>2018全国高考卷数学一卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        background:'#fff'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juanwu'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%'}}>2018全国高考卷数学二卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{width:'100%'}}>
                        <span style={{marginLeft:'35%',color:'rgb(8, 217, 245)'}}>亲，我是有底线的~</span>
                    </div>
                </div>
                <WhiteSpace/>
                <Footer/>
            </div>
        )
    }
}



