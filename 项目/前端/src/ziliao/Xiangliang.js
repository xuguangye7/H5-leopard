import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List, WingBlank} from 'antd-mobile'
export default class Xiangliang extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#fff",fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='/app/subject'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>平面向量专题</h3></NavBar>
                <WingBlank>
                <div style={{backgroundColor:"#fff"}}>
                    <p style={{fontWeight:"bolder",textAlign:"center",fontSize:"18px"}}>平面向量专题</p>
                     <img src="img/041.png" style={{width:"100%"}}/>
                     <img src="img/042.png" style={{width:"100%"}}/>
                     <img src="img/043.png" style={{width:"100%"}}/>
                     <img src="img/044.png" style={{width:"100%"}}/>
                     <img src="img/045.png" style={{width:"100%",marginBottom:"150px"}}/>
                </div>
                
                
                </WingBlank>
            </div>
        )
    }
}
