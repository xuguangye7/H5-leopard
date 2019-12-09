import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import Footer from '../components/Footer'
const Item = List.Item;
export default class Mine extends Component {
    render() {
        return (
            <div style={{height:'560px',background:'#fff'}}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                rightContent={[
                    <Link to='/s'>
                        <img src="../img/icon-test.png" style={{width:'25%',marginLeft:'70px'}}/>
                    </Link>
                ]}
                leftContent={[
                    <Link to='/notice'>
                        <img src="../img/icon_notice.png" style={{width:'25%',marginLeft:'10px'}}/>
                    </Link>
                ]}
                >我的</NavBar>
                 {/* <WhiteSpace/> */}
                {/* <WingBlank> */}
                    <div style={{width:'100%',height:'80px',backgroundColor:'rgb(8, 217, 245)'}}>
                        <span style={{fontSize:'18px'}}>
                            <img src={`../img/头像 男孩.png`} style={{marginLeft:'20px',marginTop:'13px'}}></img>
                            <b>&nbsp;&nbsp;&nbsp;用户8301342393</b>
                        </span>
                    </div>
                {/* </WingBlank> */}
                <List className="my-list" style={{}}>
                    
                    <Link to='/work'>
                        <Item 
                        arrow="horizontal" 
                        thumb="../img/jishiben.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                        我的作业
                        </Item>
                    </Link>
                    
                    <Link to='/collect'>
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
                    <Link to='#'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/夜间模式.png"
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
                        thumb="../img/邀请.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        邀请好友
                        </Item>
                    </Link>
                    <WhiteSpace />
                </List>
                <Footer/>
            </div>
        )
    }
}
