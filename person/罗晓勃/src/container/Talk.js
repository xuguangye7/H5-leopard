import React, { Component } from 'react'
import {NavBar} from 'antd-mobile'
export default class Talk extends Component {
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
                >社区</NavBar>

                <div style={{
                    width:'100%',
                    backgroundColor:'white',
                    float:'left'
                }}>
                    <div style={{
                        marginTop:'5px',
                        width:'100%',
                        height:'60px',
                        //backgroundColor:'red',
                    }}>
                        <input type="search" style={{
                            float:'left',
                            width:'90%',
                            height:'60px',
                            marginLeft:'5%',
                            borderRadius:'20px',
                            border:'solid 1px blue'
                        }} placeholder="请输入查询题目"/>
                    </div>
                    <div style={{
                        width:'90%',
                        //height:'300px',
                        //backgroundColor:'red',
                        marginTop:'5px',
                        marginLeft:'5%',
                        position:"relative"
                    }}>
                        <img src="img/blackboard.jpg" style={{
                             width:'100%',
                            // height:'100%',
                             borderRadius:'5%',
                             zIndex:'-1',
                             opacity:'0.7'
                        }}/>
                        <div style={{
                            position:'absolute',
                            top:'0',
                            left:'0',
                            padding:'15px'
                        }}
                        >设a，b∈R且a＞b，则下列命题正确的是(　　)
                        A．a2＞b2        B.ba＞1
                        C．log2(a－b)＞0  D．2－a＜2－b
                        sagagagaga
                        </div>
                    </div>
                    <div style={{
                        float:'left',
                        width:'90%',
                        height:'60px',
                        marginLeft:'5%'
                    }}>
                        <p style={{
                            paddingLeft:'5px',
                            float:'left',
                            fontSize:'20px',
                            fontWeight:"bold",
                            //textShadow:'2px 2px gray'
                        }}>发表你对于此题的见解</p>
                    </div>
                    <div style={{
                        float:'left',
                        width:'90%',
                        marginLeft:'5%',
                        marginTop:'5px',
                        padding:'5px',
                        //backgroundColor:'#099ff5'
                        border:'solid 1px #099ff5'
                    }}>
                        <div style={{
                            width:'60px',
                            height:'60px',
                            borderRadius:'30px',
                            float:'left'
                        }}>
                            <img src="img/tou1.jpg" style={{
                                width:'60px',
                                height:'60px',
                                borderRadius:'30px',
                            }}/>
                        </div>
                        <p style={{
                            float:'left',

                        }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                    </div>

                    <div style={{
                        float:'left',
                        width:'90%',
                        marginLeft:'5%',
                        marginTop:'5px',
                        padding:'5px',
                        //backgroundColor:'#099ff5'
                        border:'solid 1px #099ff5'
                    }}>
                        <div style={{
                            width:'60px',
                            height:'60px',
                            borderRadius:'30px',
                            float:'left'
                        }}>
                            <img src="img/tou2.jpeg" style={{
                                width:'60px',
                                height:'60px',
                                borderRadius:'30px',
                            }}/>
                        </div>
                        <p style={{
                            float:'left',

                        }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                    </div>
                    <div style={{
                        float:'left',
                        width:'90%',
                        marginLeft:'5%',
                        marginTop:'5px',
                        padding:'5px',
                        //backgroundColor:'#099ff5'
                        border:'solid 1px #099ff5'
                    }}>
                        <div style={{
                            width:'60px',
                            height:'60px',
                            borderRadius:'30px',
                            float:'left'
                        }}>
                            <img src="img/tou3.jpeg" style={{
                                width:'60px',
                                height:'60px',
                                borderRadius:'30px',
                            }}/>
                        </div>
                        <p style={{
                            float:'left',

                        }}>离高考还有十六天，现在我终于明白了那些曾经毫不在意的话</p>
                    </div>
                </div>              
            </div>
        )
    }
}
