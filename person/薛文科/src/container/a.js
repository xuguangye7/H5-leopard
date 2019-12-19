import React, { Component } from 'react'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import {Link} from 'react-router-dom'
let b;
let localStorageData;

export default class a extends Component {
    base64='';
    constructor(){
        super();
        this.state={
            img:'',
            nicheng:'',
            sphone:'',
        }
    }

    addImage = () => {
        this.input.click();//触发input：file的click事件，
    };
    componentDidMount(){
        localStorageData=JSON.parse(localStorage.getItem('data'))[0]
        this.setState({
            img:localStorageData.sclass.slice(4),
            nicheng:localStorageData.nicheng,
            sphone:localStorageData.sphone
        })
    }
    handleImageChange = (e) => {//处理图片
        const file = e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(e){
            this.base64=e.target.result;
             localStorage.setItem('pic',this.base64);
        }
        const windowURL = window.URL || window.webkitURL;//实现预览
        const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
      
        this.setState({
          img:dataURl
        });
    }
    postForm = (e)=>{
        e.preventDefault()
       
        let data={
            img:this.state.img,
            nicheng:localStorageData.nicheng,
            pic:localStorage.getItem('pic'),
            sphone:localStorageData.sphone
        }
        localStorage.setItem('data',JSON.stringify([data]))
       
        fetch(`http://129.211.62.80:8080/api/information?sphone=${data.sphone}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res.message){
                console.log(res.content);
                localStorage.setItem('data',res.content)
                this.props.history.push('/app/mine')
                window.location.href=window.location.href; 
            }
        })
       
    }
    render() {
        let img
        let str=this.state.img;
        b=str.indexOf('http')
        if(b!=-1){
            img=(
                <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                    <img  src={this.state.img} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                    <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                
                </div>
            )
        }
        else{
            img=(
                <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                    <img  src={`http://129.211.62.80:8080/images/img?name=${this.state.img}`} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                    <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                </div>
            )
        }
        return (
            <div>
                <NavBar
                    style={{color:'#fff',width:"100%",background:'#099ff5'}} 
                    leftContent={[
                        <Link to='/app/mine'>
                            <Icon key="0" type="left" style={{color:'white'}} />
                        </Link>
                    ]}
                    >
                   设置头像
                   
                    </NavBar>
                <form onSubmit={this.postForm}>
                {/* <form action="http://129.211.62.80:8080/api/information" method="POST" enctype="multipart/form-data" target="iframe"> */}
                <div style={{width:'100%',backgroundColor:'#fff',height:'658px',paddingTop:'10px'}}>
                    <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                        {img}
                    </div>
                    <input type="submit" value="确定" style={{marginLeft:'125px',marginTop:'60px',borderRadius:'5px',width:'80px',height:'30px',background:'#fff',border:'1px solid #099ff5'}} />
                </div>
                </form>
                <iframe id="frame" name="iframe" style={{display:'none'}}></iframe>
            </div>
        )
    }
}
