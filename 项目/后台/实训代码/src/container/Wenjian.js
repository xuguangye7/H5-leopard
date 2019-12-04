import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Wenjian extends Component {
    render() {
        return (
            <div style={{height:'800px',width:'1400px',margin:"0 auto"}}>
                <div style={{
                    background:'rgb(0,128,90)',
                    float:'left',
                    height:'800px',
                    width:'350px'

                }}>
                    <div style={{
                        width:'100%',
                        height:'200px'
                    }}>
                        <img src="../img/shu.jpg" style={{width:'100px',height:'100px',marginLeft:'125px',marginTop:'20px',float:'left'}} />
                    </div>
                    <div style={{
                        width:'300px',
                        margin:'0 auto',
                        height:'500px',
                    }}>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/shouye0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/shouye'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    首页
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/系统0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/xitong'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    系统管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/用户0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/yonghu'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    用户管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/帖子0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/tiezi'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    帖子管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                            background:'rgb(0,128,90)'
                        }}>
                            <img src="../img/文件0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/wenjian'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    文件管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width:'1050px',
                    height:'800px',
                    float:'left'
                }}>
                    <div style={{
                        width:'100%',
                        height:'100px',
                        float:'left'
                    }}>
                        <form action="">
                            <input type="search" placeholder="请输入你要查找的关键字" style={{textAlign: 'center',float:"left",width:"300px",height:"40px",marginTop:'25px',marginLeft:'35px',borderRadius:'10px',border:'1px solid rgb(105,96,96)'}}/>
                            <img src="../img/email.png" alt=""
                            style={{
                                width:'40px',
                                height:'30px',
                                float: 'right', 
                                marginRight: '30px', 
                                marginTop: '30px',
                            }}/> 
                            <img src="../img/icon_notice.png" alt="" style={{
                                width:'30px',
                                height:'30px',
                                float: 'right', 
                                marginRight: '30px', 
                                marginTop: '30px',
                            }}/> 
                        </form>
                    </div>
                    <div style={{
                        width:'1050px',
                        height:"240px",
                        float:'left'
                    }}>
                        <ul className="wendang">
                            <li>
                                <button style={{
                                    background:'#fff',
                                    border:"1px solid #000"
                                }}>
                                    <img src="../img/wendang.png" style={{float: 'left'}} />
                                    <span style={{float:'left',width:'200px',textAlign: 'center'}}>文件管理</span>
                                </button>
                            </li>
                            <li>
                                <button style={{
                                    background:'#fff',
                                    border:"1px solid #000"
                                }}>
                                    <img src="../img/ppt.png" style={{float: 'left'}} />
                                    <span style={{float:'left',width:'200px',textAlign: 'center'}}>PPT管理</span>
                                </button>
                            </li>
                            <li>
                                <button style={{
                                    background:'#fff',
                                    border:"1px solid #000"
                                }}>
                                    <img src="../img/icon-.png" style={{float: 'left'}} />
                                    <span style={{float:'left',width:'200px',textAlign: 'center'}}>图片管理</span>
                                </button>
                            </li>
                            <li>
                                <button style={{
                                    background:'#fff',
                                    border:"1px solid #000"
                                }}>
                                    <img src="../img/shipin_Linear.png" style={{float: 'left'}} />
                                    <span style={{float:'left',width:'200px',textAlign: 'center'}}>视频管理</span>
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div style={{
                        width:'1040px',
                        marginLeft:'10px',
                        float:'left',
                        display: 'block'
                    }}>
                        <ul className="liebiao">
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>1</span>
                                <span style={{float:"left",marginLeft:'180px'}}>name</span>
                                <span style={{float:'left',marginLeft:'180px'}}>123/123/123</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'180px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 编辑</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>2</span>
                                <span style={{float:"left",marginLeft:'180px'}}>name</span>
                                <span style={{float:'left',marginLeft:'180px'}}>123/123/123</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'180px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 编辑</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>3</span>
                                <span style={{float:"left",marginLeft:'180px'}}>name</span>
                                <span style={{float:'left',marginLeft:'180px'}}>123/123/123</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'180px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 编辑</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}