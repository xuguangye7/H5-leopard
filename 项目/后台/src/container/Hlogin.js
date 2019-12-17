import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
export default class Hlogin extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            url:'',
            username:'',
            pws:''
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/login')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/login')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
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
    check(e){
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            user:this.state.username,
            password:this.state.pws
        }
        fetch('http://129.211.62.80:8080/login',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/shouye')
            }
            else{
                alert('账号或密码输入有误！')
            }
        })
    }
    render() {
        return (
            <div>
                <div className='login' style={{
                    background: 'url(img/bg.jpg) center center /  100% 100%  no-repeat'
                }}>
                    <div style={{width:"100%",marginTop:"100px",fontSize:"35px",textAlign:"center"}}>数学天地后台管理系统</div>
                    <div className="login-box">
                        <div><img src="img/登录.png" alt=""class="login-img"/></div>
                        <div class="input">
                            <form onSubmit={this.check.bind(this)}>
                                <div className="shuru">
                                    <p style={{marginTop:"10px",float:"left"}}>用户名</p><input type="text" onChange={this.handleChange} id="username" name="username"/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru"><p style={{marginTop:"10px",float:"left"}}>手机号</p><input style={{border:"0"}} type="password" onChange={this.handleChange1} name="pwd" id="pwd"/></div>
                                <hr className="under"/>
                                <input type="submit" id="login" value="登录" style={{
                                    float: "left",
                                    width: "100px",
                                    height: "40px",
                                    lineHeight: "40px",
                                    marginTop:"40px",
                                    marginLeft: "180px",
                                    backgroundColor: "rgb(64, 157, 233)",
                                    borderRadius: "5px",
                                    boxShadow: "2px 2px gray"}} 
                                    // onClick={this.check}
                                    ></input>

                            </form>
                            <Link to='zhuce'>
                                <buttom style={{
                                    float:"left",
                                    marginTop:"56px",
                                    marginLeft:"15px"
                                }}>添加管理员</buttom>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
