import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
export default class Setting extends Component {
    render() {
        let url=this.props.match.url;
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                >设置</NavBar>
                <List className="my-list">
                    {/* <Link to='/help'>
                        <Item
                        arrow="horizontal"
                        thumb="img/bangzhuzhongxin.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        帮助中心
                        </Item>
                    </Link>
                    <WhiteSpace /> */}
                    <Link to='/opinion'>
                        <Item
                        arrow="horizontal"
                        thumb="img/yijian.png"
                        multipleLine
                        onClick={() => {}}
                        >
                        意见反馈
                        </Item>
                    </Link>
                    {/* <WhiteSpace />
                    <Link to='/xinxi'>
                        <Item 
                        arrow="horizontal" 
                        thumb="img/bangzhuguanyuwomen.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                            关于我们
                        </Item>
                    </Link>
                    <WhiteSpace/> */}
                        <Link to='/grade'>
                            <Item
                            arrow="horizontal"
                            thumb="../img/xiugai.png"
                            multipleLine
                            onClick={() => {}}
                            platform="android"
                            >
                            修改信息
                            </Item>
                        </Link>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Link to='/'>
                        <Button type="warning">退出登录</Button>
                    </Link>
                </List>
                
            </div>
        )
    }
}
