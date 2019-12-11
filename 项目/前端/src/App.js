import React, { Component,useState,useEffect } from 'react';
import {HashRouter as Router,Route,Link,withRouter} from 'react-router-dom'
import { TabBar,Icon, List,WhiteSpace,Button ,Carousel,WingBlank,Tabs} from 'antd-mobile';
import AppTab from './container/AppTab'
import Home from './container/Home';
import Talk from './container/Talk'
import Subject from './container/Subject'
import Mine from './container/Mine'
class App extends React.Component {
  
  
    render() {
      return (
        <div
        style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        
        top: 0
        }}
    >
        <TabBar
        unselectedTintColor="black"
        tintColor="#099ff5"
        barTintColor="#fff"
        >
        <TabBar.Item
            title="首页"
            key="Life"
            icon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/shouye.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selectedIcon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/shouye1.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selected={
                this.props.location.pathname==='/app/home'
            }
            onPress={() => {
                this.props.history.push('/app/home')
            }}
        >
            <Home />
        </TabBar.Item>
        <TabBar.Item
            title="题库"
            key="Life"
            icon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/kecheng.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selectedIcon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/kecheng1.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selected={
                this.props.location.pathname==='/app/subject'
            }
            onPress={() => {
                this.props.history.push('/app/subject')
            }}
        >
            <Subject />
        </TabBar.Item>
        <TabBar.Item
            title="问答"
            key="Life"
            icon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/talk2.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selectedIcon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/talk3.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selected={
                this.props.location.pathname==='/app/talk'
            }
            onPress={() => {
                this.props.history.push('/app/talk')
            }}
        >
            <Talk />
        </TabBar.Item>
        <TabBar.Item
            title="我的"
            key="Life"
            icon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/我的.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selectedIcon={
            <div
                style={{
                width: "22px",
                height: "22px",
                background:
                    "url(../img/我的1.png) center center /  21px 21px no-repeat"
                }}
            />
            }
            selected={
                this.props.location.pathname==='/app/mine'
            }
            onPress={() => {
                this.props.history.push('/app/mine')
            }}
        >
            <Mine />
        </TabBar.Item>
        </TabBar>
    </div>
      );
    }
  }
export default withRouter(App);