import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div style ={{position:'fixed',bottom:0,width:'100%',height:'50px',background:'white'}} className="tab">
                
                <Link to='/home' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/shouye.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'blue'}}>首页</p>
                    </div>
                </Link>
                <Link to='/subject' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/cuoti.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'blue'}}>题库</p>
                    </div>
                </Link>
                <Link to='/talk' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/shequ.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'blue'}}>社区</p>
                    </div>
                </Link>
                <Link to='/mine' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/wode.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'blue'}}>我的</p>
                    </div>
                </Link>
            </div>
        )
    }
}
