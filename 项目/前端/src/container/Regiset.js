import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '',
            pws: '',
            rpws:'',
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
            rpws: e.target.value
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
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                >注册</NavBar>
                <div style={{width:'100%',marginTop:'30px',backgroundColor:'white'}}>
                <form action={this.state.url} method="GET" style={{
                    width:'100%',
                    height:'200px'
                }}>
                    <input type="text" autocomplete="off" placeholder="手机号" onChange={this.handleChange}  id="phoneNumber" name="phoneNumber" style={{
                        width:'100%',
                        height:'40px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange1}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px'
                    }} />
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="再次输入密码" onChange={this.handleChange2}  id="pwd"  name="rpwd" style={{
                        width:'100%',
                        height:'40px'
                    }} />
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="验证码" onChange={this.handleChange3}  name="validateCode" style={{
                        width:'100%',
                        height:'40px'
                    }} />
                    <WhiteSpace/>
                    <Link to='/'>
                        <Button style={{background:'blue',color:'white'}} onClick={this.register.bind(this, phoneNumber, validateCode)}>去登陆</Button>
                    </Link>
                </form>
                </div>
            </div>
        )
    }
}
