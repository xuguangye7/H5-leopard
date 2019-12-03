import React, { Component } from 'react'
import{HashRouter as Router,Route,Link}from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
import AppTab from './AppTab'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            url:''
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
    handleChange=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            pws: e.target.value
        })
    }
    check=()=>{
        if(this.state.username=='123'&&this.state.pws=='234'){
            this.setState({
                url:'http://localhost:3000/#/home'
            })
        }
    }
    render() {
        return (
            <div>
                <div style={{width:'100%'}}>
                    <NavBar
                        style={{backgroundColor:'blue',color:'white'}}
        >登录</NavBar>
                </div>
                <div>
                    <p style={{width:'100%',fontSize:'20px'}}>欢迎来到</p>
                    <p style={{width:'100%',fontSize:'25px',marginLeft:'30px'}}>数学天地</p>
                </div>
                <div style={{width:'100%',backgroundColor:'white'}}>
                <form action={this.state.url} method="GET" style={{
                    width:'100%',
                    height:'200px'
                }}>
                    <input type="text" autocomplete="off" placeholder="帐号" onChange={this.handleChange}  id="username" name="username" style={{
                        width:'100%',
                        height:'40px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange1}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px'
                    }} />
                    <WhiteSpace/>
                    <input type="submit" id="login" value="登录" style={{
                        color:'white',
                        background:'blue',
                        border:'1px solid blue',
                        height:'40px',
                        width:'80%',
                        borderRadius:'5px',
                        marginLeft:'11%'
                    }} onClick={this.check}></input>
                </form>
                    <div style={{
                        width:"100%",
                        textAlign:'center'
                    }}>
                        <Link to='regiset'>
                            <p style={{fontSize:'18px',marginLeft:'25%',color:'#3fcccb',float:'left'}}>新用户注册</p>
                        </Link>
                        <Link to='/forget'>
                            <p style={{fontSize:'18px',color:'#3fcccb',float:'left'}}>  | 忘记密码?</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}