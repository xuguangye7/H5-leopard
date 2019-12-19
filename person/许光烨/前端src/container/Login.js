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
        // this.state.data.map((item)=>{
        //     if(this.state.username==item.sname&&this.state.pws==item.spwd){
        //         this.props.history.push('/home')
        //     }
        // })
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            user:this.state.username,
            password:this.state.pws
        }
        fetch('http://129.211.62.80:8080/api',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.message){
                localStorage.setItem('data',data.content);
                this.props.history.push('/app/home')
            }else{
                alert('登录失败')
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
                {/* <NavBar
                    style={{backgroundColor:'#099ff5',color:'white',textAlign:'center',position:'fixed',
                    width:'100%',
                    top:'0',
                    zIndex:'10',fontFamily:'Kaiti'}}
                ><h3 style={{
                    width:'100%'
                }}>登录</h3></NavBar> */}
                <div>
                    <img src="../img/logo.jpg"style={{
                        position:'absolute',
                        width:"25% ",
                        borderRadius:'50%',
                        top:'10%',
                        left:'38%'
                        //marginTop:'10%',
                        //margin
                    }}/>
                </div>
                <div style={{
                    position:'absolute',
                    borderBottom:'solid 1px gray',
                    //boxShadow:'2px 2px black',
                    width:'90%',
                    margin:'0 auto',
                    height:'330px',
                    //borderRadius:'20px',
                    top:'20%',
                    left:'5%',
                    float:'left'
                    }}>
                <form onSubmit={this.check.bind(this)} style={{
                    width:'90%',
                    height:'200px',
                    position:'relative',
                    margin:'0 auto'
                }}>
                    <div style={{
                        width:'100%',
                        height:'',
                        float:'left',
                        position:'absolute',
                        top:'20%',
                    }}>
                    <img src="../img/账号.png" style={{
                        // marginLeft:'2%',
                        marginTop:'3%',
                        width:'35px',
                        height:'35px',
                        float:'left'
                    }}/>
                    <input type="text" autocomplete="off" placeholder="账号" onChange={this.handleChange}  id="username" name="username" style={{
                        width:'80%',
                        float:'left',
                        marginLeft:'2%',
                        fontFamily:'Kaiti',
                        fontSize:'20px',
                        paddingLeft:'8px',
                        //marginLeft:'20px',
                        //position:'absolute',
                        //top:'20%',
                        height:'50px',
                        border:'solid 1px #8a8a8a',
                        borderRadius:'20px'
                    }}/>
                    </div>
                    <WhiteSpace/>
                    <div style={{
                        width:'100%',
                        height:'',
                        float:'left',
                        position:'absolute',
                        top:'55%',
                    }}>
                    <img src="../img/密码.png" style={{
                        // marginLeft:'2%',
                        marginTop:'3%',
                        width:'35px',
                        height:'35px',
                        float:'left'
                    }}/>
                    <input type="password" autocomplete="off" placeholder="密码" onChange={this.handleChange1}  id="pwd"  name="pwd" style={{
                        //width:'100%',
                        width:'80%',
                        float:'left',
                        marginLeft:'2%',
                        height:'50px',
                        fontFamily:'STKaiti',
                        fontSize:'20px',
                        paddingLeft:"8px",
                        // position:'absolute',
                        // top:'55%',
                        border:'solid 1px #8a8a8a',
                        borderRadius:'20px'
                    }} />
                    </div>
                    <WhiteSpace/>
                    <input type="submit" id="login" value="登录" style={{
                        fontFamily:'STKaiti',
                        fontSize:'20px',
                        position:'absolute',
                        //color:'black',
                        top:'100%',
                        left:'30%',
                        color:'white',
                        background:'#099ff5',
                        border:'1px solid #099ff5',
                        height:'40px',
                        width:'40%',
                        borderRadius:'10px',
                        margin:'0 auto'
                    }} ></input>
                </form>
                    <div style={{
                        width:"80%",
                        margin:'0 auto',
                        marginTop:'60px',
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
                                color:'gray'
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
                                color:'gray'
                            }}>
                                忘记密码?
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{
                    width:'90%',
                    position:'absolute',
                    top:'63%',
                    left:'5%',
                    fontSize:'16px',
                    color:'gray',
                    textAlign:'center'
                }}>
                    你还可以用以下方式登录
                </div>
                <div style={{
                    width:'90%',
                    //height:'70px',
                    position:'absolute',
                    top:'70%',
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