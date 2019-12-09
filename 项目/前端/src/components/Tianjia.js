import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Tianjia extends Component {
    render() {
        return (
            <div>
                <div style={{
                    position:'fixed',
                    marginLeft:'270px',
                    background:'#099ff5',
                    width:'50px',height:'50px',
                    borderRadius:'50px',
                    top:'75%',
                    textAlign:'center'
                }}>
                    <Link to='/add'>
                        <img src="../img/jiahao.png" style={{width:'75%',margin:'5px'}}/>
                    </Link>
                </div>
            </div>
        )
    }
}
