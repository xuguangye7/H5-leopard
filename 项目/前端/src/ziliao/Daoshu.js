import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class hanshu extends Component {
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
                ><h3>导数专题</h3></NavBar>
                <div style={{backgroundColor:"#fff"}}>
                    <p style={{fontWeight:"bolder",textAlign:"center",fontSize:"18px"}}>导数专题</p>
                     <img src="img/han1.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han2.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han3.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han4.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han5.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han6.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han7.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han8.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han9.png" style={{width:"100%",marginBottom:"100px"}}/>
                     <img src="img/han10.png" style={{width:"100%",marginBottom:"100px"}}/>
                </div>
            </div>
        )
    }
}
