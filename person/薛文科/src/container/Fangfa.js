import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Fangfa extends Component {
    render() {
        return (
            <div>
                <NavBar
                leftContent={[
                    <Link to='/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>方法</h3></NavBar>
            </div>
        )
    }
}
