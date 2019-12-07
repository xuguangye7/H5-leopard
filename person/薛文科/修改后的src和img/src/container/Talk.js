import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default class Talk extends Component {
    constructor(){
        super();
        this.state={
            data:[]
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
    render(){
        return (
            <div>
                <NavBar
                rightContent={[
                    <Link to='/add'>
                        <img src="../img/jiahao.png" style={{width:'25%',marginLeft:'70px'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>问答</h3></NavBar>
                <div style={{
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
                            border:'solid 1px blue'
                        }} placeholder="请输入查询题目"/>
                    </div>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <WingBlank>
                    {
                        this.state.data.map((item,index)=>
                            <li key={index} style={{
                                width:"100%",
                                border:'1px solid rgb(8, 217, 245)',
                                marginTop:'5px'
                            }}>
                                <span style={{
                                    marginLeft:'10px',
                                    fontSize:'12px'
                                }}>{item.smane}</span>
                                <div style={{
                                    margin:'0 auto',
                                    fontSize:'13px',
                                    marginLeft:'15px',
                                    marginTop:'10px',
                                }}> {item.scontent}+'阿海看监控了进口蜡即可两节课垃圾狗卡拉胶'</div>
                                <p style={{
                                    color:'rgb(8, 217, 245)',
                                    marginLeft:'10px',
                                }}>#{item.stime}</p>
                            </li>
                        )
                    }
                    </WingBlank>
                </div>
                <Footer/>
            </div>
        )
    }
}