import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Xitong extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/login')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
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
                            <Link to='shouye'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff',textDecoration:"none"}} href=''>
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
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff',textDecoration:"none"}} href=''>
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
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff',textDecoration:"none"}} href=''>
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
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff',textDecoration:"none"}} href=''>
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
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff',textDecoration:"none"}} href=''>
                                    文件管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{width:'1050px',height:'800px',float:'left'}}>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>昵称</div>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>真实姓名</div>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>邮箱</div>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>手机号</div>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>年级</div>
                    <div style={{
                        width:"173px",
                        height:"80px",
                        float:"left",
                        backgroundColor:"rgb(130,185,185)",
                        lineHeight:'80px',
                        textAlign:"center",
                        border:"1px solid tomato"}}>操作</div>
                    <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                        {
                            this.state.data.map((item,index)=><li>
                            <div style={{
                                width:"175px",
                                height:"80px",
                                float:"left",
                                textAlign:"center",
                                lineHeight:"80px"
                            }}>{item.snicheng}</div>
                            <div style={{
                                width:"175px",
                                height:"80px",
                                float:"left",
                                textAlign:"center",
                                lineHeight:"80px"
                            }}>{item.sname}</div>
                            <div style={{
                                width:"175px",
                                height:"80px",
                                float:"left",
                                textAlign:"center",
                                lineHeight:"80px"
                            }}>{item.qqcom}</div>
                            <div style={{
                                width:"175px",
                                height:"80px",
                                float:"left",
                                textAlign:"center",
                                lineHeight:"80px"
                            }}>{item.sphone}</div>
                            <div style={{
                                width:"175px",
                                height:"80px",
                                float:"left",
                                textAlign:"center",
                                lineHeight:"80px"
                            }}>{item.ssex}</div>
                            <div style={{width:"175px",height:"80px",float:"left"}}>
                                <div style={{
                                    width: "75px",
                                    height: "30px",
                                    backgroundColor: "rgb(0, 128, 90)",
                                    float: "left",
                                    marginTop: "25px",
                                    marginLeft: "12px",
                                    textAlign: "center",
                                    lineHeight: "30px",
                                    color: "#fff"}}>编辑</div>
                                <div style={{
                                    width: "75px",
                                    height: "30px",
                                    backgroundColor: "red",
                                    float: "left",
                                    marginTop: "25px",
                                    marginLeft: "0px",
                                    textAlign: "center",
                                    lineHeight: "30px",
                                    color: "#fff"}}>删除</div>
                            </div>
                        </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
