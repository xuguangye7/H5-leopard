import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    constructor(){
        super();
        this.state={
            color:'white'
        }
    }
    render() {
        return (
            <div style ={{position:'fixed',bottom:0,width:'100%',height:'50px',background:'#099ff5'}} className="tab">
                
                <Link to='/home' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/shouye.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'white'}}>首页</p>
                    </div>
                </Link>
                <Link to='/subject' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/tiku.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'white'}}>题库</p>
                    </div>
                </Link>
                <Link to='/talk' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/wendaguanli.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'white'}}>问答</p>
                    </div>
                </Link>
                <Link to='/mine' style={{ width:'25%',height:'50px',padding:'0',margin:'0'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                    <img src="img/wode4.png" style={{width:'24px',height:'24px',margin:'3px auto 0px auto'}}/>
                    <p style={{margin:'0 auto',color:'white'}}>我的</p>
                    </div>
                </Link>
            </div>
        )
    }
}
