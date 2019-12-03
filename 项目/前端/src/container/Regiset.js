import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
export default class Regiset extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                >注册</NavBar>
                <div style={{width:'100%',marginTop:'30px',backgroundColor:'white'}}>
                    <List>
                        <InputItem placeholder="手机/邮箱">
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="密码">
                            <div style={{ backgroundImage: 'url(img/mima.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="再次输入密码">
                            <div style={{ backgroundImage: 'url(img/mima.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    <Link to='/'>
                        <Button style={{background:'blue',color:'white'}}>去登陆</Button>
                    </Link>
                </div>
            </div>
        )
    }
}
// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {register} from '../redux/user.redux'
// import {List,Radio,InputItem,WingBlank,WhiteSpace, Button} from 'antd-mobile'

// export default class Regiset extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '', //账号
//             pwd: '', // 密码
//             pwdConfirm: '', // 确认密码
//             type: 'worker', // 用户类型 默认求职者
//         }
//     }
//     render() {
//         const RadioItem = Radio.RadioItem
//         return (
//             <div className="page-register">
//                 <List>
//                     <InputItem onChange={value => this.handleChange('username', value)}>lbj-账号</InputItem>
//                     <InputItem onChange={value => this.handleChange('pwd', value)}>lbj-密码</InputItem>
//                     <InputItem onChange={value => this.handleChange('pwdConfirm', value)}>lbj-确认</InputItem>
//                 </List>
//                 <WhiteSpace></WhiteSpace>
//                 <List>
//                     <RadioItem
//                         onClick={() => this.handleChange('type', 'worker')}
//                         checked={this.state.type === 'worker'}>牛人    </RadioItem>
//                     <RadioItem
//                         onClick={() => this.handleChange('type', 'boss')}
//                         checked={this.state.type === 'boss'}>BOSS</RadioItem>
//                 </List>
//                 <WhiteSpace></WhiteSpace>
//                 <WhiteSpace></WhiteSpace>
//                 <WhiteSpace></WhiteSpace>
//                 <WingBlank>
//                     <Button type="primary">登录</Button>
//                     <WhiteSpace></WhiteSpace>
//                     <Button onClick={this.handleGoLogin.bind(this)} type="primary">已有账号，去登录</Button>
//                 </WingBlank>
//             </div>
//         )
//     }

//     /*
//     *     去登录
//     * */
//     handleGoLogin() {
//         this.props.history.push('/login')
//     }

//     /*
//     *     绑定表单值
//     * */
//     handleChange(key, val) {
//         this.setState({
//             [key]: val
//         })
//     }
//     /*
//      * 注册
//      */
//     handleRegister() {
//         this.props.register(this.state)
//     }
// }
