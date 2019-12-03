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
    // componentDidUpdate(){
    //     fetch('http://129.211.62.80:8080/user')
    //         .then((res)=>res.json())
    //         .then((res)=>{
    //             this.setState({data:res.data});
    //         })
    // }
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
            if(this.state.username==item.tel&&this.state.pws==item.password){
                this.setState({
                    url:'http://localhost:3000/#/home'
                })
            }
        })
    }
    render() {
        return (
            <div style={{
                width:'100%',
                height:'812px',
                background:'url(img/mobile-bg.jpg) center center /  100% 812px  no-repeat',
                position:'relative'
            }}>
                <div style={{width:'100%'}}>
                    <NavBar
                        style={{backgroundColor:'blue',color:'white'}}
                    >登录</NavBar>
                </div>
                <div>
                    {/* <p style={{width:'100%',fontSize:'20px'}}>欢迎来到</p>
                    <p style={{width:'100%',fontSize:'25px',marginLeft:'30px'}}>数学天地</p> */}
                </div>
                <div style={{
                    position:'absolute',
                    width:'90%',
                    margin:'0 auto',
                    backgroundColor:'rgb(219, 238, 240)',
                    height:'370px',
                    borderRadius:'20px',
                    top:'15%',
                    left:'5%',
                    float:'left'
                    }}>
                <form action={this.state.url} method="GET" style={{
                    width:'80%',
                    height:'200px',
                    position:'relative',
                    margin:'0 auto'
                }}>
                    <input type="text" autocomplete="off" placeholder="帐号" onChange={this.handleChange}  id="username" name="username" style={{
                        width:'100%',
                        position:'absolute',
                        top:'20%',
                        height:'50px',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }}/>
                    <WhiteSpace/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange1}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'50px',
                        position:'absolute',
                        top:'55%',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    
                </form>
                    <div style={{
                       // position:'absolute',
                        width:"80%",
                        //backgroundColor:'red',
                        margin:'0 auto',
                        textAlign:'center',
                        height:'50px'
                    }}>
                        <Link to='regiset'>
                            <div style={{
                                width:'50%',
                                height:'50px',
                                lineHeight:'50px',
                                float:'left',
                                fontSize:'18px',
                                color:'#3fcccb'
                            }}>
                                立即注册
                            </div>
                        </Link>
                        <Link to='/forget'>
                        <div style={{
                                width:'50%',
                                height:'50px',
                                lineHeight:'50px',
                                float:'right',
                                fontSize:'18px',
                                color:'#3fcccb'
                            }}>
                                忘记密码
                            </div>
                        </Link>
                        <input type="submit" id="login" value="登录" style={{
                        position:'absolute',
                        top:'70%',
                        left:'10%',
                        color:'white',
                        background:'blue',
                        border:'1px solid blue',
                        height:'40px',
                        width:'80%',
                        borderRadius:'10px',
                        margin:'0 auto'
                    }} onClick={this.check}></input>
                    </div>
                </div>
                <div style={{
                    width:'90%',
                    position:'absolute',
                    top:'65%',
                    left:'5%',
                    fontSize:'18px',
                    color:'white',
                    textAlign:'center'
                }}>
                    你还可以用以下方式登录
                </div>
                <div style={{
                    width:'90%',
                    //height:'70px',
                    position:'absolute',
                    top:'73%',
                    left:'5%',
                    textAlign:'center'
                }}>
                    <img src='img/qq(1).png'
                    style={{
                        width:'25%',
                        float:'left',
                        marginLeft:'10%'
                        //height:'70px'
                    }}/>
                    {/* <div style={{
                        
                    }}></div> */}
                    <img src='img/weixin.png'
                    style={{
                        width:'25%',
                        float:'right',
                        marginRight:'10%'
                        //height:'70px'
                    }}/>
                    
                </div>
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class Login extends Component {
//     render() {
//         return (
//             <div>
//                 手机号：<input type="text"/><br/>
//                 验证码：<input type="password"/><br/>
//                 <button>登录</button>
//             </div>
//         )
//     }
// }
