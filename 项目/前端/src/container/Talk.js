import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Tianjia from '../components/Tianjia'
export default class Talk extends Component {
    constructor(){
        super();

        this.state={
            data:[],
            time:''
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/essay')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/essay')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
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
    render(){
        return (
            <div>
                
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                rightContent={[
                    <Link to='/add'>
                        <img src="../img/jiahao.png" style={{width:'25%',marginLeft:'65px'}}/>
                    </Link>
                ]}
                ><h3 style={{
                    fontFamily:'Kaiti',
                }}>社区</h3></NavBar>
                {/* <div style={{
                        marginTop:'5px',
                        width:'100%',
                        height:'60px',
                        //backgroundColor:'red',
                }}>
                    <input type="search" style={{
                        float:'left',
                        width:'90%',
                        height:'40px',
                        marginLeft:'5%',
                        borderRadius:'20px',
                        textAlign:'center',
                        border:'solid 1px #bfbfbf'
                    }} placeholder="请输入查询题目"/>
                </div> */}
                <div style={{width:'100%',
                    position:'relative',
                    height:'35%',
                    margin:'0 auto',
                }}>
                    <img src='../img/lantian.jpg' style={{
                        width:'100%',
                        position:'fixed',
                        borderRadius:'0 0 5% 5%',
                        zIndex:'-1',
                        opacity:'0.7',
                        top:'0',
                    }} />
                    <div style={{width:"60px",height:"60px",borderRadius:"30px",marginLeft:"30px",overflow:"hidden",marginTop:"105px",marginBottom:"20px",backgroundColor:"red"}}>
                        <img src='http://129.211.62.80:8080/api/images' style={{width:'100%',height:'100%'}}></img>
                    </div>
                </div>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <WingBlank>
                    {
                        this.state.data.reverse().map((item,index)=>
                            <li key={index} style={{
                                width:"100%",
                                borderBottom:'1px solid #bfbfbf',
                                marginTop:'20px',
                                paddingBottom:'5px'
                            }}>
                                {/* <img src={item.touxiang} /> */}
                                <span style={{
                                    color:"#bc44ff",
                                    marginLeft:'10px',
                                    fontFamily:'Kaiti',
                                    fontSize:'16px'
                                }}>{item.smane}</span>
                                <div style={{
                                    margin:'0 auto',
                                    fontSize:'16px',
                                    marginLeft:'18px',
                                    fontFamily:'Kaiti',
                                    marginTop:'10px',
                                }}> {item.scontent}</div>
                                <p style={{
                                    color:'#707070',
                                    marginLeft:'10px',
                                    width:'100%'
                                }}>{item.stime} 
                                    <button style={{
                                        background:'none',
                                        border:'0',
                                        color:'#099ff5',
                                        fontSize:'13px',
                                        float:'right'
                                    }}
                                    onClick={()=>this.delete(item)}
                                    >
                                        删除
                                    </button>
                                </p>
                            </li>
                        )
                    }
                    </WingBlank>
                </div>
                {/* <Tianjia/> */}
            </div>
        )
    }
}