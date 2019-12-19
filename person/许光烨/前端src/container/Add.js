import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom'
let localStorageData
export default class Add extends Component {
    constructor(){
        super();
        var today = new Date(),
            time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state={
            name:'',
            scontent:'',
            img:'',
            data:[],
            a:1,
            time:time
        }
    }
    componentDidMount(){
        // fetch('http://129.211.62.80:8080/api/get')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         this.setState({
        //             data:res.content,
        //             a:this.state.a+1
                    
        //         })
        //     })
        localStorageData=JSON.parse(localStorage.getItem('data'))[0];
        this.setState({
           name:localStorageData.nicheng,
           img:localStorageData.sclass
        })
    }
    handlechange=(e)=>{
        this.setState({
            scontent:e.target.value
        })
    }
    onSubmit=(e)=> {
        // 阻止事件传递
        console.log(this.state.scontent);
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            sno:'2',
            smane:this.state.name,
            scontent:this.state.scontent,
            stime:this.state.time,
            touxiang:this.state.img,
            sphone:localStorageData.sphone

        }
        fetch('http://129.211.62.80:8080/essay/add',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            this.props.history.push('/app/talk')
            alert('发表成功')
        })

    }

    render() {
        return (
            <div style={{background:'url(../img/yun.png) center center no-repeat',height:'618px',fontFamily:'Kaiti'}}>
                <NavBar
                style={{color:'#fff',background:"#099ff5"}}
                leftContent={[
                    <Link to='/app/talk'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >分享</NavBar>
                {/* <div style={{width:'100%',
                    position:'relative',
                    height:'30%',
                    margin:'0 auto',
                }}>
                    <img src='img/lantian.jpg' style={{
                        width:'100%',
                        borderRadius:'0 0 5% 5%',
                        zIndex:'-1',
                        opacity:'0.7',
                        top:'0',
                    }} />
                </div> */}
                <div style={{width:'100%'}}></div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {/* <WhiteSpace/> */}
                    <textarea
                    type="text"
                    placeholder="这一刻的想法..."
                    style={{
                        width:'100%',
                        lineHeight:"25px",
                        height:'200px',
                        fontFamily:'Kaiti',
                        // marginLeft:'10%',
                        border:'1px solid rgb(219, 238, 240)',
                        // borderRadius:'10px'
                    }}
                    onChange={this.handlechange}
                    />
                    <input type="submit" value="发表" style={{
                        color:'white',
                        background:'#3fcccb',
                        border:'1px solid #3fcccb',
                        height:'40px',
                        fontFamily:'Kaiti',
                        fontSize:"18px",
                        width:'80%',
                        borderRadius:'10px',
                        marginTop:'10px',
                        marginLeft:'10%'
                    }}></input>
                </form>
            </div>
        )
    }
}
