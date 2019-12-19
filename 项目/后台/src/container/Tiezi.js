import React, { Component } from 'react'
import './1.css'
import {Link} from 'react-router-dom'
export default class tiezi extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/essay')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/essay')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    delete=(idx)=>{
        console.log(idx)
        fetch('http://129.211.62.80:8080/essay/delete?scontent='+idx.scontent)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
            })
    }
    render() {
        return (
            <div>
                <div className='home'>
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
                            <img src="img/shu.jpg" style={{width:'100px',height:'100px',marginLeft:'125px',marginTop:'20px',float:'left'}} />
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
                    <div class="t-right">
                        <div class="R2">
                            <div style={{width:'100%'}}>
                                <div class="head">
                                <div style={{
                                    width:"208px",
                                    height:"80px",
                                    float:"left",
                                    backgroundColor:"rgb(130,185,185)",
                                    lineHeight:'80px',
                                    textAlign:"center",
                                    border:"1px solid tomato"}}>头像</div>
                                <div style={{
                                    width:"208px",
                                    height:"80px",
                                    float:"left",
                                    backgroundColor:"rgb(130,185,185)",
                                    lineHeight:'80px',
                                    textAlign:"center",
                                    border:"1px solid tomato"}}>用户名</div>
                                <div style={{
                                    width:"208px",
                                    height:"80px",
                                    float:"left",
                                    backgroundColor:"rgb(130,185,185)",
                                    lineHeight:'80px',
                                    textAlign:"center",
                                    border:"1px solid tomato"}}>帖子内容</div>
                                <div style={{
                                    width:"208px",
                                    height:"80px",
                                    float:"left",
                                    backgroundColor:"rgb(130,185,185)",
                                    lineHeight:'80px',
                                    textAlign:"center",
                                    border:"1px solid tomato"}}>时间</div>
                                <div style={{
                                    width:"208px",
                                    height:"80px",
                                    float:"left",
                                    backgroundColor:"rgb(130,185,185)",
                                    lineHeight:'80px',
                                    textAlign:"center",
                                    border:"1px solid tomato"}}>操作</div>
                                </div>
                                <ul className="liebiao" style={{listStyleType:"none",marginTop:"0px"}}>
                                {
                                    this.state.data.reverse().map((item,index)=>
                                    <div class="body" style={{border:"1px solid black"}}>
                                        <div style={{float:'left',width:'210px',height:"80px"}}>
                                            <div style={{width:'50px',height:'50px',float:'left',borderRadius:"50px",overflow:"hidden",marginTop:'20px',marginLeft:"80px"}}>
                                                <img src={`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`} style={{width:'100%',height:'100%'}} />
                                            </div>
                                        </div>
                                        <div style={{float:'left',width:'210px',height:"80px",lineHeight:"80px",textAlign:'center'}}>{item.smane}</div>
                                        <div style={{float:'left',width:'210px',height:"80px",lineHeight:"80px",textAlign:'center'}}>{item.scontent}</div>
                                        <div style={{float:'left',width:'210px',height:"80px",lineHeight:"80px",textAlign:'center'}}>{item.stime}</div>
                                        <div style={{float:'left',width:'210px',height:"80px",lineHeight:"80px",textAlign:'center'}}><button
                                            style={{background:'green',
                                            height:'30px',
                                            width:'80px',
                                            border:'1px solid green',
                                            marginLeft:'20px',
                                            color:'white',
                                            float: 'left',
                                            marginTop: '30px'}}
                                            >编辑</button>
                                            <button
                                            style={{background:'red',
                                            height:'30px',width:'80px',
                                            border:'1px solid red',
                                            color:'white',
                                            float: 'left',
                                            marginTop: '30px'}}
                                            onClick={()=>this.delete(item)}
                                            >删除</button></div>
                                    </div>)
                                }
                                </ul>
                                </div>
                        </div>
                        {/* <div class="R3"></div> */}
                    </div>
                </div>
            </div>
        )
    }
}
