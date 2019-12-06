import React, { Component } from 'react'
import {NavBar,Carousel,WingBlank} from 'antd-mobile' 
import {Link} from 'react-router-dom'
import Marquee from 'antd-mobile/lib/notice-bar/Marquee'
export default class Subject extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
    //   componentDidMount() {
    //     // simulate img loading
    //     setTimeout(() => {
    //       this.setState({
    //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //       });
    //     }, 100);
    //   }
    render() {
        return (
            <div>
                <NavBar
                style={{
                    backgroundColor:'#099ff5',
                    color:'white',
                    height:'60px',

                }}
                // rightContent={[
                //     <Link to='/s'>
                //         <img src="img/icon-test.png" style={{width:'25%',marginLeft:'70px'}}/>
                //     </Link>
                // ]}
                // leftContent={[
                //     <Link to='/notice'>
                //         <img src="img/icon_notice.png" style={{width:'25%',marginLeft:'10px'}}/>
                //     </Link>
                // ]}
                >课程</NavBar>
                <div style={{
                    width:'100%',
                    height:'100%',
                    margin:'0 auto',
                    //backgroundColor:'red'
                }}>
                    {/* <WingBlank> */}
                    <Carousel style={{
                        padding: '16px',
                        background: '#fff',
                        overflow: 'hidden',
                    }}
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                        >
                        {this.state.data.map((val, index) => (
                            <a
                            key={val}
                            href=""
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                            >
                            <img
                                src={`img/kk1.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
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
                        }}>推荐课程</p>
                    </div>   
                    <div style={{
                        width:'100%',
                        height:'120px',
                        //backgroundColor:'red',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue3.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
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
                            <img src="img/shuxue1.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    
                    <div style={{
                        width:'100%',
                        height:'120px',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue2.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    <div style={{
                        width:'100%',
                        height:'120px',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue3.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    <div style={{
                        width:'100%',
                        height:'120px',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue3.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    <div style={{
                        width:'100%',
                        height:'120px',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue3.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    <div style={{
                        width:'100%',
                        height:'120px',
                        padding:'8px'
                    }}>
                        <div>
                            <img src="img/shuxue3.jpg" style={{
                                width:'40%',
                                float:'left'
                            }}/>
                            <p style={{
                                marginTop:'0',
                                marginLeft:'3%',
                                width:'55%',
                                float:'left',
                                fontSize:'16px'
                            }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                        </div>
                    </div>
                    </div>        
                </div>
            </div>
        )
    }
}
