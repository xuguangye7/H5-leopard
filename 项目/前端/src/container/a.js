import React, { Component } from 'react'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class a extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:'http://129.211.62.80:8080/api/images',
            show:false
        }
    }

    addImage = () => {
        this.input.click();//触发input：file的click事件，
    };
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/api/images')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data1:res.content
                })
            })
    }
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
        fetch('http://129.211.62.80:8080/api/information',{
        
        })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.content){
                    this.props.history.push('/a')
                }
            })
        
    }
    render() {
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
                <form action="http://129.211.62.80:8080/api/information" method="POST" enctype="multipart/form-data" target="iframe">
                <div style={{width:'100%',backgroundColor:'#fff',height:'658px',paddingTop:'10px'}}>
                    <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                        <img  src={this.state.imgUrl} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                        <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                    </div>
                    <input type="submit" value="确定" style={{marginLeft:'125px',marginTop:'60px',borderRadius:'5px',width:'80px',height:'30px',background:'#fff',border:'1px solid #099ff5'}} />
                </div>
                </form>
                <iframe id="frame" name="iframe" style={{display:'none'}}></iframe>
            </div>
        )
    }
}
