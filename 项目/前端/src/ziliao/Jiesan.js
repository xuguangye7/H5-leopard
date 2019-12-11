import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List, WingBlank} from 'antd-mobile'
export default class Jiesan extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <NavBar
                leftContent={[
                    <Link to='/app/subject'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>解三角形专题</h3></NavBar>
                <WingBlank>
                <div style={{backgroundColor:"#fff"}}>
                    <p style={{fontWeight:"bolder",textAlign:"center",fontSize:"18px"}}>解三角形专题</p>
                     <img src="img/051.png" style={{width:"100%"}}/>
                     <img src="img/052.png" style={{width:"100%"}}/>
                     <img src="img/053.png" style={{width:"100%"}}/>
                </div>
                
                
                </WingBlank>
            </div> 
        )
    }
}
