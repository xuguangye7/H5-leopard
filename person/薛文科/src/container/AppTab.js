import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import Home from './Home'
import Subject from './Subject'
import Talk from './Talk'
import Mine from './Mine'
export default class AppTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: "blueTab"
        };
      }
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
                unselectedTintColor="#949494"
                //tintColor="blue"
                tintColor="#ffdb2c"
                barTintColor="white"
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
                            "url(img/shouye.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    selectedIcon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/shouye1.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    selected={this.state.selectedTab === "blueTab"}
                    onPress={() => {
                    this.setState({
                        selectedTab: "blueTab"
                    });
                    }}
                >
                    <Home />
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/kecheng.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    selectedIcon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/kecheng1.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    title="课程"
                    key="Idea"
                    selected={this.state.selectedTab === "redTab"}
                    onPress={() => {
                    this.setState({
                        selectedTab: "redTab"
                    });
                    }}
                >
                    <Subject/>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/shequ.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    selectedIcon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/talk.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    title="社区"
                    key="store"
                    dot
                    selected={this.state.selectedTab === "greenTab"}
                    onPress={() => {
                    this.setState({
                        selectedTab: "greenTab"
                    });
                    }}
                >
                    <Talk/>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/wode.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    selectedIcon={
                    <div
                        style={{
                        width: "22px",
                        height: "22px",
                        background:
                            "url(img/wode1.png) center center /  21px 21px no-repeat"
                        }}
                    />
                    }
                    title="我的"
                    key="store"
                    //dot
                    selected={this.state.selectedTab === "boTab"}
                    onPress={() => {
                    this.setState({
                        selectedTab: "boTab"
                    });
                    }}
                >
                    <Mine/>
                </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
