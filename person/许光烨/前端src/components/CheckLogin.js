import React, { Component } from 'react'

export default class CheckLogin extends Component {
    componentDidMount() {
        // 登录注册两个页面不需要判断
        if(filterCheck.indexOf(this.props.location.pathname) > -1) {
            return;
        }
         // 在这里请求相关接口判断用户是否完成登录
        axios.get('/user/info')
            .then(res => {
                if(res.status === 200) {
                    if(res.data.code === 0) {
                        this.props.getUserInfo(res.data.data) 
                    }else {
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render() {
        return null;
    }
}
