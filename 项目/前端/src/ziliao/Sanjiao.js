import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List, WingBlank} from 'antd-mobile'
export default class Sanjiao extends Component {
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
                ><h3>三角函数专题</h3></NavBar>
                <WingBlank>
                <div style={{backgroundColor:"#fff"}}>
                    <p style={{fontWeight:"bolder",textAlign:"center",fontSize:"18px"}}>三角函数专题</p>
                     <img src="img/031.png" style={{width:"100%"}}/>
                     <img src="img/032.png" style={{width:"100%"}}/>
                     <img src="img/033.png" style={{width:"100%"}}/>
                     <img src="img/034.png" style={{width:"100%"}}/>
                     <img src="img/035.png" style={{width:"100%"}}/>
                     <img src="img/036.png" style={{width:"100%"}}/>
                     <img src="img/037.png" style={{width:"100%",marginBottom:"100px"}}/>
                </div>
                
                
                </WingBlank>
            </div>
        )
    }
}
