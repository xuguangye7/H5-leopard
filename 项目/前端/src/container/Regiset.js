import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '',
            pws: '',
            class:'',
            validateCode:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            phoneNumber: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            pws: e.target.value
        })
    }
    handleChange2=(e)=>{
        this.setState({
            class: e.target.value
        })
    }
    handleChange3=(e)=>{
        this.setState({
            validateCode: e.target.value
        })
    }
    register(phoneNumber,validateCode){
        const registerValue={
            "phoneNumber": phoneNumber,
            "pws":this.state.pws,
            "rpws":this.state.rpws,
            "validateCode": validateCode
        }
        const url = " http://localhost:3000/regiset";
        try{
            fetch(url,{
                method:'POST',
                headers:{
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue),
            }).then(res=>res.json())
              .then(data=>{
                  console.log(data);
                  if(data.success){
                      alert('成功')
                  }
              });
        }catch(e){
            console.log(e.message);
        }
    }
    render() {
        const { phoneNumber, validateCode } = this.state;
        return (
            <div style={{
                width:'100%',
                height:'812px',
                background:'url(img/mobile-bg.jpg) center center /  100% 100%  no-repeat',
                position:'relative'
            }}>
                <div style={{width:'100%'}}>
                    <NavBar
                        style={{backgroundColor:'blue',color:'white'}}
                    >注册</NavBar>
                </div>
                <div style={{
                    position:'absolute',
                    width:'90%',
                    margin:'0 auto',
                    backgroundColor:'rgb(219, 238, 240)',
                    height:'330px',
                    borderRadius:'20px',
                    top:'15%',
                    left:'5%',
                    float:'left'
                    }}>
                <form method="GET" style={{
                    width:'80%',
                    height:'200px',
                    position:'relative',
                    margin:'0 auto'
                }}>
                    <input type="text" autocomplete="off" placeholder="手机号" onChange={this.handleChange}  id="username" name="username" style={{
                        width:'100%',
                        position:'absolute',
                        top:'10%',
                        height:'40px',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange2}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px',
                        position:'absolute',
                        top:'35%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="年级" onChange={this.handleChange3}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px',
                        position:'absolute',
                        top:'60%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="验证码" onChange={this.handleChange1}  id="class"  name="class" style={{
                        width:'60%',
                        height:'40px',
                        position:'absolute',
                        top:'85%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} /><button style={{
                        width:'37%',
                        height:'40px',
                        position:'absolute',
                        top:'85%',
                        left:'63%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }}>获取验证码</button>
                    <WhiteSpace/>
                    <input type="submit" id="login" value="去登录" style={{
                        position:'absolute',
                        top:'120%',
                        left:'10%',
                        color:'white',
                        background:'blue',
                        border:'1px solid blue',
                        height:'40px',
                        width:'80%',
                        borderRadius:'10px',
                        margin:'0 auto'
                    }} onClick={this.check}></input>
                </form>
                </div>
            </div>
        )
    }
}
