import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class shouye extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/login/get')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/login/get')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
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
                <div style={{width: '1050px',height: '800px',float: 'left'}}>
                    <div style={{width: '1050px',height: '80px',position:'relative',float: 'top'}}>
                        <div style={{width: '850px',height: '80px',float:'left'}}>
                            <h1 style={{marginLeft:'10px'}}>你好!</h1>
                        </div>
                        <div style={{width: '200px',height: '80px',float:'left'}}>
                            <img src="../img/icon_notice.png" style={{width: '30px',height: '30px',marginTop:'25px'}}/>
                            <img src="../img/email.png" style={{width:'30px',height: '30px',marginLeft:'30px'}}/>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'80px',float:'top'}}>
                        <p style={{marginLeft:'50px'}}>&nbsp;&nbsp;用户名
                        {
                            this.state.data.map((item,index)=>
                            {item.sname}
                            )
                        }
                        </p>
                        <hr/>
                        
                    </div>
                    <div style={{width:'100%',height:'210px',position:'relative'}}>
                        <div style={{backgroundColor:'#ff9800',width:'200px',height:'210px',
                            marginLeft:'60px',float:'left',position:'relative'}}>
                            <p>&nbsp;</p>
                            <span style={{color:'#fff',marginTop:'65px',fontSize:'60px',marginLeft:'40px'}}>520</span>
                            <br/>
                            <span style={{marginLeft:'56px'}}>新注册用户</span>
                        </div>
                        <div style={{backgroundColor:'#9ff043',width:'200px',height:'210px',
                            marginLeft:'60px',float:'left',position:'relative'}}>
                            <p>&nbsp;</p>
                            <span style={{color:'#fff',marginTop:'65px',fontSize:'60px',marginLeft:'25px'}}>1314</span>
                            <span style={{marginLeft:'56px'}}>累计用户量</span>
                        </div>
                        <div style={{backgroundColor:'#ff4081',width:'200px',height:'210px',
                            marginLeft:'60px',float:'left',position:'relative'}}>
                            <p>&nbsp;</p>
                            <span style={{color:'#fff',marginTop:'65px',fontSize:'60px',marginLeft:'45px'}}>666</span>
                            <span style={{marginLeft:'75px'}}>发帖量</span>
                        </div>
                        <div style={{backgroundColor:'#09c4a7',width:'200px',height:'210px',
                            marginLeft:'60px',float:'left',position:'relative'}}>
                            <p>&nbsp;</p>
                            <span style={{color:'#fff',marginTop:'65px',fontSize:'60px',marginLeft:'45px'}}>999</span>
                            <span style={{marginLeft:'60px'}}>文件下载量</span>
                        </div>
                    </div>
                    <div style={{width:'100%',height:'110px'}}></div>
                    <div style={{width:'100%',height:'350px'}}>
                        <div style={{fontSize:'20px',width:'500px',height: '100%',float:'left',
                        position:'relative',marginLeft:'50px'}}>
                            <p >访问量</p>
                            <img src="../img/统计图左.png"/>
                        </div>
                        <div style={{fontSize:'20px',width:'500px',height: '100%',float:'left',
                        position:'relative'}}>
                            <p>新老用户</p>
                            <img src="../img/统计图右.png"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
