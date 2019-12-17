import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel,WingBlank,Tabs} from 'antd-mobile';
export default class Touxiang extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg'
        }
    }
    addImage = () => {
        this.input.click();//触发input：file的click事件，
      };
     
      handleImageChange = (e) => {//处理图片
        const saveUrl = this.props.saveUrl;
        const file = e.target.files[0];
        const windowURL = window.URL || window.webkitURL;//实现预览
        const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
        this.setState({
          imgUrl:dataURl
        });
        let param = new FormData(); //创建form对象
        param.append('file',file);

    }
     getData=(e)=>{
        e.preventDefault(); 
        if(this.state.pwd!==this.state.rePwd)
            console.log('密码输入不一致');
        fetch('http://129.211.62.80:8080/api/information',{
           
        })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                // if(data.content){
                //     this.props.history.push('/my/set')
                // }
            })
        
    }
    render() {
        return (
            <div>
                <NavBar
                   style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
                  
                    >
                   修改个人资料
                   
                    </NavBar>
                    {/* <form onSubmit={this.onSubmit}> */}
                    <form action="http://129.211.62.80:8080/api/information" method='post' enctype="multipart/form-data">
                    <div style={{width:'100%',backgroundColor:'#fff',height:'140px',paddingTop:'10px'}}>
                        <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                            <img  src={this.state.imgUrl} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                            <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                        </div>
                    </div>
                    <div style={{width:'100%',height:'400px',backgroundColor:'#fff'}}>
                        <div>
                            <input type='submit' onClick={this.getData} value='保存' style={{color:'#fff',fontSize:'18px',width:'50%',height:'50px',marginLeft:'16%',backgroundColor:'#f7cb3c',borderRadius:'20px',marginLeft:'20%'}}/>
                       </div>
                    </div>
                    </form>
            </div>
        )
    }
}