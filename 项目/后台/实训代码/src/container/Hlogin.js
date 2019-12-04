import React, { Component } from 'react'
import './login.css'
export default class Hlogin extends Component {
    constructor(){
        super();
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
                this.setState({data:res.data});
            })
    }
    // componentDidUpdate(){
    //     fetch('http://129.211.62.80:8080/login')
    //         .then((res)=>res.json(res))
    //         .then((res)=>{
    //             this.setState({data:res.data});
    //         })
    // }
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
    check=()=>{
        this.state.data.map((item)=>{
            if(this.state.username==item.snicheng&&this.state.pws==item.spwd){
                this.props.history.push('/shouye')
            }
        })
    }
    render() {
        return (
            <div>
                <div className='login' style={{
                    background: 'url(img/bg.jpg) center center /  100% 100%  no-repeat'
                }}>
                    <div className="login-box">
                        <div><img src="img/登录.png" alt=""class="login-img"/></div>
                        <div class="input">
                            <form>
                                <div className="shuru">
                                    <p style={{marginTop:"10px"}}>用户名</p><input type="text" onChange={this.handleChange} id="username" name="username"/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru"><p>密码</p><input style={{border:"0"}} type="password" onChange={this.handleChange1} name="pwd" id="pwd"/></div>
                                <hr className="under"/>
                                <input type="submit" id="login" value="登录" style={{
                                    float: "left",
                                    width: "100px",
                                    height: "40px",
                                    lineHeight: "40px",
                                    marginTop:"30px",
                                    marginLeft: "180px",
                                    backgroundColor: "rgb(64, 157, 233)",
                                    borderRadius: "5px",
                                    boxShadow: "2px 2px gray"}} onClick={this.check}></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
