import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default class Talk extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            value:'关注' 
        }   
    }
    changeValue=()=>{
        this.setState({
            value:'已关注'
        })
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8080/')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/home'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                rightContent={[
                    <Link to='/add'>
                        <img src="img/jiahao.png" style={{width:'25%',marginLeft:'70px'}}/>
                    </Link>
                ]}
                >社区</NavBar>
                <div style={{width:'100%',
                    background:'url(img/sx.jpg) center center /  100% 180px no-repeat',
                    height:'180px',
                    textAlign:'center',
                    lineHeight:'180px',
                    color:'blue',
                    fontSize:'30px'
                }}>
                    欢迎来到数学圣地
                </div>
                <WhiteSpace/>
                <WingBlank>
                    {
                        this.state.data.map((item,index)=>
                            <li key={index} style={{}}>
                                <img src={`img/shuxue${item.id-1}.jpg`} style={{height:'40px',width:'40px',float:'left'}}/>
                                <span style={{lineHeight:'20px',textAlign:'center',marginLeft:'10px',marginRight:'10px'}}>{item.username}</span>
                                <br/><br/>
                                <p>{item.contents}</p>
                                <button style={{marginLeft:'30%',background:'white',border:'1px solid white'}}>点赞</button>
                    <button style={{marginLeft:'10%',background:'red',border:'1px solid red'}} onClick={this.changeValue}>{this.state.value}</button>
                                <hr/>
                            </li>
                        )
                    }
                </WingBlank>
                <Footer/>
            </div>
        )
    }
}
