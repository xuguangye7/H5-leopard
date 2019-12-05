import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import Footer from '../components/Footer'
const Item = List.Item;
const Brief = Item.Brief;
const name=['购物车','优惠券','在线服务','我的收藏','我的关注','收货地址','沙发','家居饰品','户外家具','全部分类'];
const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'img/circle'+i+'.png',
    text: name[i],
}));  
export default class Mine extends Component {
    render() {
        return (
            <div style={{height:'560px'}}>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                rightContent={[
                    <Link to='/s'>
                        <img src="img/icon-test.png" style={{width:'25%',marginLeft:'70px'}}/>
                    </Link>
                ]}
                leftContent={[
                    <Link to='/notice'>
                        <img src="img/icon_notice.png" style={{width:'25%',marginLeft:'10px'}}/>
                    </Link>
                ]}
                >我的</NavBar>
                <div style={{width:'100%',height:'80px',backgroundColor:'#00bbcc'}}>
                    <span style={{fontSize:'18px'}}>
                        <img src={`img/头像 男孩.png`} style={{marginLeft:'20px',marginTop:'13px'}}></img>
                        <b>&nbsp;&nbsp;&nbsp;用户8301342393</b>
                    </span>
                </div>
                {/* <div style={{width:'100%',height:'100px',}}>
                    <button style={{borderRadius:'80% 80%',width:'100px',height:'100px',marginLeft:'50px',backgroundColor:'green'}}>修改信息</button>
                    <button style={{borderRadius:'80% 80%',width:'100px',height:'100px',marginLeft:'50px',backgroundColor:'yellow'}}>答题记录</button>
                </div> */}
                <List className="my-list" style={{}}>
                    
                    <Link to='/work'>
                        <Item 
                        arrow="horizontal" 
                        thumb="img/jishiben.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                        我的作业
                        </Item>
                    </Link>
                    
                    <Link to='/grade'>
                        <Item
                        arrow="horizontal"
                        thumb="img/nianji.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的年级
                        </Item>
                    </Link>
                    
                    <Link to='/collect'>
                        <Item
                        arrow="horizontal"
                        thumb="img/wodeshoucang.png"
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
                        thumb="img/cuoti.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的错题
                        </Item>
                    </Link>
                    <hr/>
                    <WhiteSpace/>
                    <hr/>
                    <Link to='#'>
                        <Item
                        arrow="horizontal"
                        thumb="img/夜间模式.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        夜间模式
                        </Item>
                    </Link>
                    
                    <Link to='#'>
                        <Item
                        arrow="horizontal"
                        thumb="img/邀请.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        邀请好友
                        </Item>
                    </Link>
                    <hr/>
                    <WhiteSpace />
                </List>
                <Footer/>
            </div>
        )
    }
}
