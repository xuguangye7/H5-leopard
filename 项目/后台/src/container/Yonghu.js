import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Yonghu extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/api')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/api')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    delete=(idx)=>{
        console.log(idx)
        fetch('http://129.211.62.80:8080/api/delete?sphone='+idx.sphone)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
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
                    float:'left',
                    // background:"pink"
                }}>
                    <div style={{
                        width:'100%',
                        height:'80px',
                        float:"left",
                        // background:'rgb(130,185,185)'
                    }}>
                            <div style={{
                                width:"208px",
                                height:"80px",
                                float:"left",
                                backgroundColor:"rgb(130,185,185)",
                                lineHeight:'80px',
                                textAlign:"center",
                                border:"1px solid tomato"
                            }}>昵称</div>
                            <div style={{
                                width:'208px',
                                height:'80px',
                                float:'left',
                                border:"1px solid tomato",
                                backgroundColor:"rgb(130,185,185)",
                                lineHeight:'80px',
                                textAlign:'center'
                            }}>姓名</div>
                            <div style={{
                                width:'208px',
                                height:'80px',
                                float:'left',
                                border:"1px solid tomato",
                                backgroundColor:"rgb(130,185,185)",
                                lineHeight:'80px',
                                textAlign:'center'
                            }}>手机号</div>
                            <div style={{
                                width:'208px',
                                height:'80px',
                                float:'left',
                                border:"1px solid tomato",
                                backgroundColor:"rgb(130,185,185)",
                                lineHeight:'80px',
                                textAlign:'center'
                            }}>密码</div>
                            <div style={{
                                width:'208px',
                                height:'80px',
                                float:'left',
                                border:"1px solid tomato",
                                backgroundColor:"rgb(130,185,185)",
                                lineHeight:'80px',
                                textAlign:'center'
                            }}>操作</div>
                    </div>
                    <div style={{
                        width:'1050px',
                        float:'left',
                        marginTop:"2px",
                        display: 'block'
                    }}>
                        <div className="liebiao">
                        {
                                this.state.data.map((item,index)=><div style={{border:"1px solid black"}} key={index}>
                                    <span style={{float:'left',width:'210px',height:"80px",textAlign:'center'}}>{item.nicheng}</span>
                                    <span style={{float:"left",width:'210px',height:"80px",textAlign:'center'}}>{item.sname}</span>
                                    <span style={{float:'left',width:'210px',height:"80px",textAlign:'center'}}>{item.sphone}</span>
                                    <span style={{float:'left',width:'210px',height:"80px",textAlign:'center'}}>{item.spwd}</span>
                                    <button style={{
                                            background:'green',
                                            height:'30px',
                                            width:'80px',
                                            border:'1px solid green',
                                            // marginLeft:'35px',
                                            color:'#fff',
                                            float: 'left',
                                            marginTop:'25px'
                                        }}> 编辑</button>
                                        <button style={{
                                            background:'red',
                                            height:'30px',
                                            width:'80px',
                                            border:'1px solid red',
                                            color:'#fff',
                                            float: 'left',
                                            marginTop:'25px'
                                        }} onClick={()=>this.delete(item)}> 删除</button>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}