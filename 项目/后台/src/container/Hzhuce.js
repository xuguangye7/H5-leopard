import React, { Component } from 'react'
import './login.css'
export default class Hzhuce extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            nicheng:'',
            username:'',
            qqcom:'',
            sphone:'',
            ssex:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            nicheng: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    handleChange2=(e)=>{
        this.setState({
            qqcom: e.target.value
        })
    }
    handleChange3=(e)=>{
        this.setState({
            sphone: e.target.value
        })
    }
    handleChange4=(e)=>{
        this.setState({
            ssex: e.target.value
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
            sname:this.state.username,
            qq:this.state.qqcom,
            phoneNumber:this.state.sphone,
            ssex:this.state.ssex,

        }
        fetch('http://129.211.62.80:8080/login/register',{
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
            <div>
                <div className='login' style={{
                    background: 'url(img/bg.jpg) center center /  100% 100%  no-repeat'
                }}>
                    <div className="login-box1">
                        <div><img src="img/注册.png" alt=""class="login-img1"/></div>
                        <div class="input">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="shuru1">
                                    <p style={{marginTop:"10px",float:"left"}}>昵称</p><input type="text" onChange={this.handleChange} id="username" name="username"/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru1">
                                    <p style={{marginTop:"10px",float:"left"}}>真实姓名</p><input style={{border:"0"}} type="text" onChange={this.handleChange1} name="pwd" id="pwd"/>
                                    </div>
                                <hr className="under"/>
                                <div className="shuru1">
                                    <p style={{marginTop:"10px",float:"left"}}>邮箱</p><input type="text" onChange={this.handleChange2} id="username" name=""/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru1">
                                    <p style={{marginTop:"10px",float:"left"}}>手机号</p><input type="text" onChange={this.handleChange3} id="username" name=""/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru1">
                                    <p style={{marginTop:"10px",float:"left"}}>性别</p><input type="text" onChange={this.handleChange4} id="username" name=""/>
                                </div>
                                <hr className="under"/>
                                <input type="submit" id="login" value="注册" style={{
                                    float: "left",
                                    width: "100px",
                                    height: "40px",
                                    lineHeight: "40px",
                                    marginTop:"30px",
                                    marginLeft: "180px",
                                    backgroundColor: "rgb(64, 157, 233)",
                                    borderRadius: "5px",
                                    boxShadow: "2px 2px gray"}} 
                                    // onClick={this.check}
                                    ></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
