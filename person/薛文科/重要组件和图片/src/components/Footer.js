import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div style ={{position:'fixed',bottom:0,width:'100%',height:'40px',background:'white',lineHeight:'40px'}} className="tab">
                <Link to='/home'>首页</Link>
                <Link to='/subject'>题库</Link>
                <Link to='/talk'>社区</Link>
                <Link to='/mine'>我的</Link>
            </div>
        )
    }
}
