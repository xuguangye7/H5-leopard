import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class Add extends Component {
    constructor(){
        super();
        this.state={
            scontent:''
        }
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
            sno:'1',
            smane:this.state.scontent.slice(5,1),
            scontent:this.state.scontent,
            stime:'2019/12/6'

        }
        fetch('http://129.211.62.80:8080/essay',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            alert('发表成功')
        })

    }
    render() {
        return (
            <div>
                <NavBar
                style={{color:'#fff',background:"#099ff5"}}
                leftContent={[
                    <Link to='/talk'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >言论</NavBar>
                <div style={{width:'100%',
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
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <div style={{width:'100%',height:'200px'}}></div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input 
                    type="text"
                    style={{
                        width:'80%',
                        height:'40px',
                        marginLeft:'10%',
                        border:'1px solid rgb(219, 238, 240)',
                        borderRadius:'10px'
                    }}/>
                    <input type="submit" value="发表" style={{
                        color:'white',
                        background:'#3fcccb',
                        border:'1px solid #3fcccb',
                        height:'40px',
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
