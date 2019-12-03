import React from 'react'
import {Route} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import Home from './Home'
import Subject from './Subject'
import Talk from './Talk'
import Mine from './Mine'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(img/shouye.png) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(img/shouye.png) center center /  21px 21px no-repeat'}}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
          </TabBar.Item>
          
        </TabBar>
        
      </div>
    );
  }
}