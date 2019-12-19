import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,SearchBar, Tabs,Badge, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
// function FormattedDate(props) {
//     return <div>It is {props.date.toLocaleTimeString()}.</div>;
// }
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
      }
      componentDidMount() {
        // this.timerID = setInterval(
        //   () => this.tick(),
        //   1000
        // );
        const end = Date.parse(new Date('2020-6-8 8:00'))
        this.countFun(end);
      }
    
      componentWillUnmount() {
        // clearInterval(this.timerID);
        clearInterval(this.timer);
      }
      countFun = (end) => {
         
            let now_time = Date.parse(new Date());
            var remaining = end - now_time;
          
            this.timer = setInterval(() => {
            //防止出现负数
               if (remaining > 1000) {
                 remaining -= 1000;
                 let day = Math.floor((remaining / 1000 / 3600) / 24);
                 let hour = Math.floor((remaining / 1000 / 3600) % 24);
                 let minute = Math.floor((remaining / 1000 / 60) % 60);
                 let second = Math.floor(remaining / 1000 % 60);
         
                 this.setState({
                     day:day,
                     hour:hour < 10 ? "0" + hour : hour,
                     minute:minute < 10 ? "0" + minute : minute,
                     second:second < 10 ? "0" + second : second
                 })
               } else {
                 clearInterval(this.timer);
                 //倒计时结束时触发父组件的方法
                 //this.props.timeEnd();
               }
         }, 1000);
        }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div style={{
                width:'100%',
                height:'100%',
                backgroundColor:'#f6f6f9',
                zIndex:'',
            }}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center',
                width:'100%',
                position:'fixed',
                top:'0',
                zIndex:'10'
            }}
                ><h3 style={{
                    fontFamily:'Kaiti',
                }}>数学天地</h3></NavBar>
                <div style={{
                    backgroundColor:'#099ff5',color:'white',textAlign:'center',
                    width:'100%',height:'30px',zIndex:'10'
                }}>
                </div>
                <div style={{width:'100%',
                    position:'relative',
                    height:'200px',
                    background:'url(../img/lantian.jpg) 55% 50% no-repeat',
                    margin:'0 auto',
                }}>
                    <div>
                        
                    </div>
                    {/* <img src='../img/lantian.jpg' style={{
                         position:'absolute',
                         top:'0',
                         left:'0',
                        width:'100%',
                        height:'100%',
                        borderRadius:'5%',
                        zIndex:'-10',
                        opacity:'0.7',
                    }} /> */}
                    <div style={{

                    }}>
                    <span style={{
                        float:'left',
                        width:'100%',
                        marginTop:'15px',
                        marginLeft:'10px',
                        fontSize:'22px',
                        color:'black',
                        fontFamily:'Kaiti',
                    }}>2020年高考倒计时</span>
                    <p>
                    <span style={{
                        float:'left',
                        marginTop:'15px',
                        marginLeft:'20px',
                        fontSize:'44px',
                        color:'black',
                        fontFamily:'STXingkai',
                    }}>{this.state.day}</span>
                    <span style={{
                        float:'left',
                        marginLeft:'10px',
                        marginTop:'25px',
                        fontSize:"24px",
                        fontFamily:'Kaiti',
                    }}>天</span></p>
                    </div>
                </div>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:'100%',height:'100px'}}>
                        <Link to='/ziliao'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle5.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>专题</span>
                            </div>
                        </Link>
                        <Link to='/zhenti'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle1.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>真题</span>
                            </div>
                        </Link>
                        <Link to='/fangfa'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle4.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>方法</span>
                            </div>
                        </Link>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{width:'100%',height:'100px',marginTop:"1px"}}>
                        <Link to='/gongshi'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle6.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>记公式</span>
                            </div>
                        </Link>
                        <Link to='/book'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle7.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>参考书</span>
                            </div>
                        </Link>
                        <Link to='/zhengce'>
                            <div style={{width:'33%',float:'left',marginLeft:"1px",backgroundColor:"#fff",borderRadius:'10px',height:'100px',textAlign:'center'}}>
                                <img src='../img/circle9.png' style={{width:'40%',marginTop:'15%'}}/>
                                <br/>
                                <span style={{
                                    fontSize: '15px',color:'#3fcccb',fontFamily:'Kaiti'
                                }}>分数线</span>
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
                        <span style={{
                            fontSize:'20px',
                            fontFamily:'Kaiti'
                        }}>真题推荐</span>
                    ]}
                    rightContent={[
                        <Link to='/zhenti'>
                            <span style={{color:'white',fontSize:'16px',fontFamily:'Kaiti'}}>更多>></span>
                        </Link>
                    ]}
                    ></NavBar>
                    {/* <WhiteSpace/> */}
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        background:'#fff',
                        // borderBottom:'solid 1px gray',
                        // boxShadow:'0px 1px gray'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juanyi'>
                            <span style={{float:'right',lineHeight:'100px',marginRight:'10%',fontFamily:'STKaiti',fontSize:'16px',color:'black'}}>2019全国高考卷数学一卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        background:'#fff',
                        // borderBottom:'solid 1px gray',
                        // boxShadow:'0px 1px gray'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juaner'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%',fontFamily:'STKaiti',fontSize:'16px',color:'black'}}>2019全国高考卷数学二卷>></span>
                        </Link>
                    </div>
                    {/* <WhiteSpace/> */}
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        background:'#fff',
                        // borderBottom:'solid 1px gray',
                        // boxShadow:'0px 1px gray'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juansan'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%',fontFamily:'STKaiti',fontSize:'16px',color:'black'}}>2019全国高考卷数学三卷>></span>
                        </Link>
                    </div>
                    {/* <WhiteSpace style={{backgroundColor:'#fff'}}/> */}
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        background:'#fff',
                        // borderBottom:'solid 1px gray',
                        // boxShadow:'0px 1px gray'
                        
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juansi'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%',fontFamily:'STKaiti',fontSize:'16px',color:'black'}}>2018全国高考卷数学一卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        //height:'100px',
                        background:'#fff',
                        // borderBottom:'solid 1px gray',
                        // boxShadow:'1px 1px gray'
                    }}>
                        <img src="../img/2.jpg" style={{
                            width:'80px',
                            height:'100px',
                            marginLeft:'20px'
                        }}/>
                        <Link to='/juanwu'>
                        <span style={{float:'right',lineHeight:'100px',marginRight:'10%',fontFamily:'STKaiti',fontSize:'16px',color:'black'}}>2018全国高考卷数学二卷>></span>
                        </Link>
                    </div>
                    <WhiteSpace style={{backgroundColor:'#fff'}}/>
                    <div style={{width:'100%'}}>
                        <span style={{marginLeft:'35%',color:'rgb(8, 217, 245)'}}>亲，我是有底线的~</span>
                    </div>
                </div>
                <WhiteSpace/>
            </div>
        )
    }
}



