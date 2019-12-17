import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Change extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            nicheng:'',
            qqcom:'',
            pws:'',
        }
    }
    handleChange=(e)=>{
        this.setState({
            nicheng: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            qqcom: e.target.value
        })
    }
    handleChange2=(e)=>{
        this.setState({
            pws: e.target.value
        })
    }
    onSubmit=(e)=> {
        // 阻止事件传递
        console.log(this.state.phone);
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            nicheng:this.state.nicheng,
            // qq:this.state.qqcom,
            pws:this.state.pws,

        }
        fetch('http://129.211.62.80:8080/api/change',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            this.props.history.push('/')
            alert('请重新登录')
        })

    }
    render() {
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/s'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >修改信息</NavBar>
            <div style={{
                    position:'absolute',
                    width:'90%',
                    margin:'0 auto',
                    backgroundColor:'rgb(219, 238, 240)',
                    height:'300px',
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
                    <input type="text" autocomplete="off" placeholder="昵称" onChange={this.handleChange}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px',
                        position:'absolute',
                        top:'20%',
                        fontFamily:'Kaiti',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    {/* <input type="text" autocomplete="off" placeholder="邮箱" onChange={this.handleChange1}  id="username" name="username" style={{
                        width:'100%',
                        position:'absolute',
                        top:'35%',
                        height:'40px',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }}/>
                    <WhiteSpace/> */}
                    <input type="text" autocomplete="off" placeholder="密码" onChange={this.handleChange2}  id="pwd"  name="pwd" style={{
                        width:'100%',
                        height:'40px',
                        position:'absolute',
                        top:'55%',
                        fontFamily:'Kaiti',
                        border:'solid 1px black',
                        borderRadius:'10px'
                    }} />
                    <WhiteSpace/>
                    <input type="submit" id="login" value="确定" style={{
                        position:'absolute',
                        top:'120%',
                        left:'10%',
                        color:'white',
                        background:'#099ff5',
                        border:'1px solid #099ff5',
                        height:'40px',
                        width:'80%',
                        fontFamily:'Kaiti',
                        fontSize:"16px",
                        borderRadius:'10px',
                        margin:'0 auto'
                    }}></input>
                </form>
                </div>
            </div>
        )
    }
}
