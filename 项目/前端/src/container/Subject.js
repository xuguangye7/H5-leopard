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
                        {[1,2,3].map((val, index) => (
                            <a
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                            >
                            <img
                                src={`../img/lantian.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'180px' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    <div style={{
                        width:'100%',
                        backgroundColor:'#fff'
                    }}> 
                    <div style={{
                        width:'100%',
                        margin:'0 auto',
                        height:'40px',
                        backgroundColor:'#fff'
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
                            paddingLeft:'10px',
                            fontSize:'20px',
                        }}>推荐习题</p>
                    </div>   
                        <div style={{
                            width:'100%',
                            height:'120px',
                            padding:'8px',
                        }}>
                            <div>
                                <img src="../img/shuxue3.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>

                        <div style={{
                            width:'100%',
                            height:'120px',
                            //backgroundColor:'green',
                            padding:'8px'
                        }}>
                            <div>
                                <img src="../img/shuxue1.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>
                        
                        <div style={{
                            width:'100%',
                            height:'120px',
                            padding:'8px'
                        }}>
                            <div>
                                <img src="../img/shuxue2.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>
                        <div style={{
                            width:'100%',
                            height:'120px',
                            padding:'8px'
                        }}>
                            <div>
                                <img src="../img/shuxue3.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>
                        <div style={{
                            width:'100%',
                            height:'120px',
                            padding:'8px'
                        }}>
                            <div>
                                <img src="../img/shuxue3.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>
                        <div style={{
                            width:'100%',
                            height:'120px',
                            padding:'8px'
                        }}>
                            <div>
                                <img src="../img/shuxue3.jpg" style={{
                                    width:'40%',
                                    float:'left'
                                }}/>
                                <p style={{
                                    marginTop:'0',
                                    marginLeft:'3%',
                                    width:'55%',
                                    float:'left',
                                    fontSize:'14px'
                                }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}

