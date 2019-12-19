import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    constructor(props){
        super(props);
        this.state = {
            sname: '',
            pws: '',
            nicheng:'',
            validateCode:''
        }
    }
    handleChange2=(e)=>{
        this.setState({
            phoneNumber: e.target.value
        })
    }
    handleChange3=(e)=>{
        this.setState({
            pws: e.target.value
        })
    }
    handleChange=(e)=>{
        this.setState({
            nicheng: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            sname: e.target.value
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
            sname:this.state.sname,
            qq:this.state.phoneNumber.slice(1),
            phoneNumber:this.state.phoneNumber,
            pws:this.state.pws,
            calss:'img/upload_d2ea9b52c764a35b17c6d3e5831c2bc2.png',

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
                background:'url(img/yun.png) center center  no-repeat',
                position:'relative'
            }}>
                <div style={{width:'100%'}}>
                    <NavBar
                        style={{backgroundColor:'#099ff5',color:'white',textAlign:'center',position:'fixed',
                        width:'100%',
                        top:'0',
                        zIndex:'10',fontFamily:'Kaiti'}}
                        leftContent={[
                            <Link to='/'>
                                <Icon key="0" type="left" style={{color:'white',fontFamily:'Kaiti'}} />
                            </Link>
                        ]}
                    ><h3 style={{
                        //width:'100%'
                    }}>注册</h3></NavBar>
                </div>
                <div style={{
                    position:'absolute',
                    width:'90%',
                    margin:'0 auto',
                    // backgroundColor:'rgb(219, 238, 240)',
                    //border:'solid 1px gray',
                    //boxShadow:'2px 2px black',
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
                    <input type="text" autocomplete="off" placeholder="昵称" onChange={this.handleChange}  id="nicheng"  name="nicheng" style={{
                        width:'97%',
                        height:'40px',
                        position:'absolute',
                        top:'15%',
                        fontFamily:'Kaiti',
                        paddingLeft:'8px',
                        fontSize:'18px',
                        border:'solid 1px gray',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="text" autocomplete="off" placeholder="姓名" onChange={this.handleChange1}  id="name"  name="name" style={{
                        width:'97%',
                        height:'40px',
                        position:'absolute',
                        top:'45%',
                        fontFamily:'Kaiti',
                        paddingLeft:'8px',
                        fontSize:'18px',
                        border:'solid 1px gray',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="text" autocomplete="off" placeholder="手机号" onChange={this.handleChange2}  id="phone" name="phone" style={{
                        width:'97%',
                        position:'absolute',
                        top:'75%',
                        fontFamily:'Kaiti',
                        paddingLeft:'8px',
                        fontSize:'18px',
                        height:'40px',
                        border:'solid 1px gray',
                        borderRadius:'10px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange3}  id="pwd"  name="pwd" style={{
                        width:'97%',
                        height:'40px',
                        position:'absolute',
                        top:'105%',
                        fontFamily:'Kaiti',
                        paddingLeft:'8px',
                        fontSize:'18px',
                        border:'solid 1px gray',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="submit" id="login" value="去登录" style={{
                        position:'absolute',
                        top:'145%',
                        left:'10%',
                        color:'white',
                        background:'#099ff5',
                        border:'1px solid #099ff5',
                        height:'40px',
                        width:'80%',
                        borderRadius:'10px',
                        fontFamily:'Kaiti',
                        fontSize:'20px',
                        margin:'0 auto'
                    }}></input>
                </form>
                </div>
            </div>
        )
    }
}
