import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List,Carousel} from 'antd-mobile'
import Footer from '../components/Footer'
export default class Subject extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
               <NavBar
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>题库</h3></NavBar>
                <div style={{
                    width:'100%',
                    height:'100%',
                    margin:'0 auto',
                    //backgroundColor:'red'
                }}>
                    {/* <WingBlank> */}
                    <Carousel style={{
                        paddingTop:'10px',
                        background: '#fff',
                        overflow: 'hidden',
                    }}
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        >
                        {[3,4,5].map((val, index) => (
                            <a
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                            >
                            <img
                                src={`../img/1-${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'180px' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                    <div style={{
                        width:'100%',
                        // backgroundColor:'#fff'
                    }}> 
                    <div style={{
                        width:'100%',
                        margin:'0 auto',
                        height:'40px',
                        backgroundColor:'#08ccf6'
                    }}>
                        <div style={{
                            float:'left',
                            marginTop:'5px',
                            marginLeft:'8px',
                            height:'30px',
                            width:'5px',
                            borderRadius:'2px',
                            backgroundColor:'#099ff5',
                            border:'solid 1px #099ff5'
                        }}></div>
                        <p style={{
                            float:'left',
                            margin:'0',
                            paddingTop:'8px',
                            //marginLeft:'8px',
                            paddingLeft:'20px',
                            fontSize:'20px',
                        }}>推荐习题</p>
                    </div>   
                    <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            // padding:'8px',
                            paddingLeft:"8px",
                            backgroundColor:"#f5f5f9"
                        }}>
                            <Link to='/hanshu'>
                            <div>
                                <img src="../img/ti-1.jpg" style={{
                                    width:'40%',
                                    // height:"105px",
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'9%',marginLeft:'18%',float:'left',fontSize:'18px'}}>函数</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——学数学，绝不会有过份的努力</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/daoshu'>
                            <div>
                                <img src="../img/ti-2.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>导数</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——导数较难，世上无难事只怕有心人</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/sanjiao'>
                            <div>
                                <img src="../img/ti-3.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>三角函数</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——公式多，题不难，认真仔细</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/xiangliang'>
                            <div>
                                <img src="../img/ti-4.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>平面向量</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——向量，打开平面与空间思想的大门。</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/jiesan'>
                            <div>
                                <img src="../img/ti-5.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>解三角形</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——一题多解，各有千秋，灵活运用</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/shulie'>
                            <div>
                                <img src="../img/ti-6.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>数列</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——等差等比通项求和，公式牢记</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            // padding:'8px',
                            paddingLeft:"8px"
                        }}>
                            <Link to='/liti'>
                            <div>
                                <img src="../img/ti-7.jpg" style={{
                                    width:'40%',
                                    height:"105px",
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>立体几何</p>
                                <p style={{marginTop:'0px',marginLeft:'3%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——几何学的简洁美却又正是几何学之所以完美的核心存在.</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/jiexi'>
                            <div>
                                <img src="../img/ti-8.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'18px'}}>解析几何</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——椭圆，双曲线，抛物线，多总结技巧</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        <div style={{
                            width:'100%',
                            height:'105px',
                            backgroundColor:'#f5f5f9',
                            padding:'8px'
                        }}>
                            <Link to='/gailu'>
                            <div>
                                <img src="../img/ti-9.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <div style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    
                                }}><p style={{width:"100%",marginTop:'4%',marginLeft:'18%',float:'left',fontSize:'17px'}}>概率与统计</p>
                                <p style={{marginTop:'0px',marginLeft:'6%',float:'left',fontSize:'14px',lineHeight:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——统筹过去，计划将来</p>
                                 </div>
                            </div>
                            </Link>
                        </div>
                        <WhiteSpace style={{backgroundColor:"#fff"}}/>
                        
                    </div>        
                </div>
            </div>
        )
    }
}

