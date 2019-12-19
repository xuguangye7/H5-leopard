import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import Footer from '../components/Footer'
const Item = List.Item;
let localStorageData
export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            name:'',
            img:''
        }
    }
    componentDidMount(){
        localStorageData=JSON.parse(localStorage.getItem('data'))[0];
        this.setState({
           name:localStorageData.nicheng,
           img:localStorageData.sclass.slice(4)
        })
    }
    render() {
        return (
            <div style={{height:'589px',backgroundColor:"#fff",fontFamily:'Kaiti'}}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                ><h3>我的</h3></NavBar>
                {/* <WingBlank> */}
                    <div style={{width:'100%',height:'100px'}}>
                        <span style={{fontSize:'18px'}}>
                        <Link to="/a" style={{width:'100%',height:'100px',}}>
                            <img src={`http://129.211.62.80:8080/images/img?name=${this.state.img}`} style={{float:'left',marginLeft:'20px',marginTop:'33px',width:'50px',height:'50px',borderRadius:'25px'}}></img>
                            </Link>
                            <b style={{
                                 width:'200px',
                                 float:'left',
                                 marginTop:'50px'
                            }}>&nbsp;&nbsp;&nbsp;{this.state.name}</b>

                        </span>
                    </div>
                {/* </WingBlank> */}
                <WhiteSpace/>
                <List className="my-list" style={{backgroundColor:"#f6f6f9"}}>
                    
                    <Link to='/work'>
                        <Item 
                        arrow="horizontal" 
                        thumb="../img/jishiben.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                        我的日程
                        </Item>
                    </Link>
                    <Link to='/help'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/bangzhuzhongxin.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        帮助中心
                        </Item>
                    </Link>
                    <Link to='/xinxi'>
                        <Item 
                        arrow="horizontal" 
                        thumb="../img/bangzhuguanyuwomen.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                            关于我们
                        </Item>
                    </Link>
                    {/* <Link to='/collect'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/wodeshoucang.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的收藏
                        </Item>
                    </Link>
                    <Link to='/wrong'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/cuoti.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的错题
                        </Item>
                    </Link>
                    <WhiteSpace/> */}
                </List>
                <WhiteSpace/>
                <List>
                <Link to='/s'>
                    <Item
                    arrow="horizontal"
                    thumb="../img/设置.png"
                    multipleLine
                    onClick={() => {}}
                    platform="android"
                    >
                    设置
                    </Item>
                </Link>
                </List>
                <Footer/>
            </div>
        )
    }
}
