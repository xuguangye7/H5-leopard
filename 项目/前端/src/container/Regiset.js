import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '',
            pws: '',
            nicheng:'',
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
            nicheng: e.target.value
        })
    }
    handleChange3=(e)=>{
        this.setState({
            validateCode: e.target.value
        })
    }
    displayResult=(e)=>{
        var  re = /^1\d{10}$/
        if(e.target.value){
            if (re.test(e.target.value)) {
                this.setState({
                    phoneNumber:e.target.value
                })
            }
            else{
                alert('输入手机不合法')
            } 
        }
        else{
            alert('手机号不能为空')
        }
    
    }
    onSubmit=(e)=> {
        // 阻止事件传递
        console.log(this.state.phone);
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            nicheng:this.state.nicheng,
            sname:'用户'+this.state.phoneNumber,
            qq:this.state.phoneNumber.slice(1),
            phoneNumber:this.state.phoneNumber,
            calss:'7',
            pws:this.state.pws,

        }
        fetch('http://129.211.62.80:8080/register',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/')
                alert('注册成功')
            }
            else{
                alert('该手机号已经被占用')
            }
        })

    }
    render() {
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
                        leftContent={[
                            <Link to='/'>
                                <Icon key="0" type="left" style={{color:'white'}} />
                            </Link>
                        ]}
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
                <form onSubmit={this.onSubmit.bind(this)} style={{
                    width:'80%',
                    height:'200px',
                    position:'relative',
                    margin:'0 auto'
                }}>
                    <input type="password" autocomplete="off" placeholder="昵称" onChange={this.handleChange2}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px',
                        position:'absolute',
                        top:'10%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="text" autocomplete="off" placeholder="手机号" onChange={this.handleChange}  id="username" name="username" style={{
                        width:'100%',
                        position:'absolute',
                        top:'35%',
                        height:'40px',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange1}  id="pwd"  name="pwd" style={{
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
                    }}></input>
                </form>
                </div>
            </div>
        )
    }
}
