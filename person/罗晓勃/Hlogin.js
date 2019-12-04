import React, { Component } from 'react'
import './login.css'
export default class Hlogin extends Component {
    render() {
        return (
            <div>
                <div className='login'>
                    <img src="img/bg.jpg" alt="" style={{width:'100%',height: '1000px'}}/>
                    <div className="login-box">
                        <div><img src="img/登录.png" alt=""class="login-img"/></div>
                        <div class="input">
                            <form action="">
                                <div className="shuru">
                                    <img src='img/yonghu.png'style={{
                                        width:'30px',
                                        height:'30px'
                                    }}/><input type="text" name="" id=""/>
                                </div>
                                <hr className="under"/>
                                <div className="shuru">
                                    <img src='img/yaoshi.png'style={{
                                        width:'30px',
                                        height:'30px'
                                    }}/><input type="password" name="" id=""/></div>
                                <hr className="under"/>
                                <div className="shuru">
                                    <p>验证码</p>
                                    <input type="text" name="" id=""/></div>
                                <hr className="under"/>
                            </form>
                        </div>
                        <button className="btn"><a href="../实训代码-光烨/实训代码/首页.html">登录</a></button>
                    </div>
                </div>
            </div>
        )
    }
}
