import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,SearchBar, Tabs,Badge, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
export default class Zhenti extends Component {
    render() {
        return (
            <div style={{
                fontFamily:'Kaiti',
                color:'black',
                //backgroundColor:'#fff'
            }}>
                <NavBar
                leftContent={[
                    <Link to='/app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center',
                width:'100%',
                position:'fixed',
                top:'0',
                zIndex:'10'
            }}
                ><h3>真题</h3></NavBar>
                 <div style={{
                    backgroundColor:'#099ff5',color:'white',textAlign:'center',
                    width:'100%',height:'45px',zIndex:'10'
                }}></div>
                <WhiteSpace/>
                <img src="img/1-6.jpg" style={{width:"100%"}}/>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/2.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanyi1'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019全国高考卷数学一卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/8.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juaner1'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019全国高考卷数学二卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/4.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juansan1'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019全国高考卷数学三卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/3.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juansi1'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2018全国高考卷数学一卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/5.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanwu1'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2018全国高考卷数学二卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/6.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanliu'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019北京市高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/7.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanqi'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019天津市高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/4.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanba'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019山东省高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/jz.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juansan'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019浙江省高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/8.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanjiu'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019上海市高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'100%',
                    height:'100px',
                    background:'#fff'
                }}>
                    <img src="img/2.jpg" style={{
                        width:'80px',
                        height:'100px',
                        marginLeft:'20px'
                    }}/>
                    <Link to='/juanshi'>
                    <span style={{float:'right',lineHeight:'100px',marginRight:'10%',color:'black'}}>2019江苏省高考卷数学卷>></span>
                    </Link>
                </div>
                <WhiteSpace/>
            </div>
            
        )
    }
}
