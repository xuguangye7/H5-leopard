import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Hanshu extends Component {
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
                ><h3>函数专题</h3></NavBar>
                <div style={{backgroundColor:"#fff"}}>
                    <p style={{fontWeight:"bolder",textAlign:"center",fontSize:"18px"}}>函数专题</p>
                     <img src="img/dao1.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao2.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao3.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao4.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao5.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao6.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao7.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao8.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao9.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/dao10.png" style={{width:"100%",marginBottom:"100px"}}/>
                </div>
            </div>
        )
    }
}
