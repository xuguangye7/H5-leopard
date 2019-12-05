import React, { Component } from 'react'
import{HashRouter as Router,Route,Link}from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
import AppTab from './AppTab'
export default class Login extends Component {
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
        fetch('http://129.211.62.80:8080/api')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
    // componentDidUpdate(){
    //     fetch('http://129.211.62.80:8080/test')
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
            if(this.state.username==item.sname&&this.state.pws==item.sphone){
                this.props.history.push('/home')
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
                    >登录</NavBar>
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
                    <input type="submit" id="login" value="登录" style={{
                        position:'absolute',
                        top:'100%',
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
                    <div style={{
                        width:"80%",
                        margin:'0 auto',
                        marginTop:'40px',
                        textAlign:'center',
                        height:'50px'
                    }}>
                        <Link to='/regiset'>
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
                                忘记密码?
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{
                    width:'90%',
                    position:'absolute',
                    top:'59%',
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
                    top:'65%',
                    left:'5%',
                    textAlign:'center'
                }}>
                    <img src='img/Q.png'
                    style={{
                        width:'15%',
                        float:'left',
                        marginLeft:'20%'
                        //height:'70px'
                    }}/>
                    <img src='img/weixin.png'
                    style={{
                        width:'15%',
                        float:'right',
                        marginRight:'20%',
                    }}/>
                    
                </div>
            </div>
        )
    }
}