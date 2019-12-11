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
        fetch('http://129.211.62.80:8080/essay/delete?sno='+idx.sno)
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
                        <div class="R1">
                            <form action="">
                                <input type="search" class="search" placeholder="请输入你要查找的关键字" style={{textAlign: 'center'}}/>
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
                        <div class="R2">
                            <table style={{width:'100%'}}>
                                <tr class="head">
                                    <th>序号</th>
                                    <th>用户名</th>
                                    <th style={{width:'265px'}}>帖子内容</th>
                                    <th>时间</th>
                                    <th style={{borderRight: 'none'}}>操作</th>
                                </tr>
                               
                                {
                                    this.state.data.map((item,index)=><tr class="body">
                                    <td>{item.sno}</td>
                                    <td>{item.smane}</td>
                                    <td style={{width:'265px'}}>{item.scontent}</td>
                                    <td>{item.stime}</td>
                                    <td><button
                                        style={{background:'green',
                                        height:'30px',
                                        width:'80px',
                                        border:'1px solid green',
                                        marginLeft:'20px',
                                        color:'white',
                                        float: 'left',
                                        marginTop: '10px'}}
                                        >编辑</button>
                                        <button
                                        style={{background:'red',
                                        height:'30px',width:'80px',
                                        border:'1px solid red',
                                        color:'white',
                                        float: 'left',
                                        marginTop: '10px'}}
                                        onClick={()=>this.delete(item)}
                                        >删除</button></td>
                                </tr>)
                                }
                            </table>
                        </div>
                        <div class="R3"></div>
                    </div>
                </div>
            </div>
        )
    }
}
