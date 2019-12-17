import React, { Component,useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel,WingBlank,Tabs} from 'antd-mobile';
import App from './App';
import Login from './container/Login';
import Regiset from './container/Regiset'
import Setting from './container/Setting'
import Ziliao from './container/Ziliao'
import Zhenti from './container/Zhenti'
import Fangfa from './container/Fangfa'
import Gongshi from './container/Gongshi'
import Book from './container/Book'
import Zhengce from './container/Zhengce'
import Add from './container/Add'
import Grade from './container/Change'

import Juanyi from './container/juanyi'
import Juaner from './container/juaner'
import Juansan from './container/juansan'
import Juansi from './container/juansi'
import Juanwu from './container/juanwu'
import Juanliu from './container/juanliu'
import Juanqi from './container/juanqi'
import Juanba from './container/juanba'
import Juanjiu from './container/juanjiu'
import Juanshi from './container/juanshi'
import Juanyi1 from './container/juanyi1'
import Juaner1 from './container/juaner1'
import Juansan1 from './container/juansan1'
import Juansi1 from './container/juansi1'
import Juanwu1 from './container/juanwu1'


import H1 from './ziliao/H1'
import H2 from './ziliao/H2'
import H3 from './ziliao/H3'
import H4 from './ziliao/H4'
import J1 from './ziliao/J1'
import J2 from './ziliao/J2'
import X1 from './ziliao/X1'
import X2 from './ziliao/X2'
import X3 from './ziliao/X3'
import S1 from './ziliao/S1'
import S2 from './ziliao/S2'
import S3 from './ziliao/S3'
import Sl1 from './ziliao/Sl1'
import Sl2 from './ziliao/Sl2'
import Sl3 from './ziliao/Sl3'
import L1 from './ziliao/L1'
import L2 from './ziliao/L2'
import Jx1 from './ziliao/Jx1'
import Jx2 from './ziliao/Jx2'
import Jx3 from './ziliao/Jx3'
import Jx4 from './ziliao/Jx4'

import Gl1 from './ziliao/Gl1'
import Gl2 from './ziliao/Gl2'
import Gl3 from './ziliao/Gl3'
import Gl4 from './ziliao/Gl4'

import Dao1 from './ziliao/Dao1'
import Dao2 from './ziliao/Dao2'
import Dao3 from './ziliao/Dao3'

import Hanshu from './ziliao/Hanshu'
import Daoshu from './ziliao/Daoshu'
import Sanjiao from './ziliao/Sanjiao'
import Xiangliang from './ziliao/Xiangliang'
import Jiesan from './ziliao/Jiesan'
import Shulie from './ziliao/Shulie'
import Liti from './ziliao/Liti'
import Jiexi from './ziliao/Jiexi'
import Gailu from './ziliao/Gailu'
import Todolist from './Todolist/Todolist'
import a from './container/a'
export default class Home extends Component {
    render() {
        return (
            <Router>
               <div >
                   
                    <Switch>    
                        <Route path='/app' component={App}/>
                        <Route path='/s' component={Setting}/>

                        <Route path='/ziliao' component={Ziliao}/>

                        <Route path='/ziliao:id=1' component={H1}/>
                        <Route path='/ziliao:id=2' component={H2}/>
                        <Route path='/ziliao:id=3' component={H3}/>
                        <Route path='/ziliao:id=4' component={H4}/>
                        <Route path='/ziliao:id=5' component={J1}/>
                        <Route path='/ziliao:id=6' component={J2}/>
                        <Route path='/ziliao:id=7' component={X1}/>
                        <Route path='/ziliao:id=8' component={X2}/>
                        <Route path='/ziliao:id=9' component={X3}/>
                        <Route path='/ziliao:id=10' component={S1}/>
                        <Route path='/ziliao:id=11' component={S2}/>
                        <Route path='/ziliao:id=12' component={S3}/>
                        <Route path='/ziliao:id=13' component={L1}/>
                        <Route path='/ziliao:id=14' component={L2}/>
                        <Route path='/ziliao:id=22' component={Jx1}/>
                        <Route path='/ziliao:id=23' component={Jx2}/>
                        <Route path='/ziliao:id=24' component={Jx3}/>
                        <Route path='/ziliao:id=25' component={Jx4}/>

                        <Route path='/ziliao:id=15' component={Sl1}/>
                        <Route path='/ziliao:id=16' component={Sl2}/>
                        <Route path='/ziliao:id=17' component={Sl3}/>

                        <Route path='/ziliao:id=26' component={Dao1}/>
                        <Route path='/ziliao:id=27' component={Dao2}/>
                        <Route path='/ziliao:id=28' component={Dao3}/>

                        <Route path='/ziliao:id=18' component={Gl1}/>
                        <Route path='/ziliao:id=19' component={Gl2}/>
                        <Route path='/ziliao:id=20' component={Gl3}/>
                        <Route path='/ziliao:id=21' component={Gl4}/>


                        <Route path='/zhenti' component={Zhenti}/>
                        <Route path='/fangfa' component={Fangfa}/>
                        <Route path='/gongshi' component={Gongshi}/>
                        <Route path='/book' component={Book}/>
                        <Route path='/zhengce' component={Zhengce}/>

                        <Route path='/add' component={Add}/>
                        <Route exact path='/' component={Login}/>
                        <Route path='/regiset' component={Regiset}/>

                        <Route path='/grade' component={Grade} />
                        <Route path='/collect' component={Collect} />
                        <Route path='/work' component={Work} />
                        <Route path='/notice' component={Notice} />

                        <Route path='/xinxi' component={Aboutus}/>
                        <Route path='/opinion' component={Opinion}/>
                        <Route path='/help' component={Help}/>
                        <Route path='/wrong' component={Wrong}/>

                        <Route path='/juanyi' component={Juanyi} />
                        <Route path='/juaner' component={Juaner} />
                        <Route path='/juansan' component={Juansan} />
                        <Route path='/juansi' component={Juansi} />
                        <Route path='/juanwu' component={Juanwu} />
                        <Route path='/juanliu' component={Juanliu} />
                        <Route path='/juanqi' component={Juanqi} />
                        <Route path='/juanba' component={Juanba} />
                        <Route path='/juanjiu' component={Juanjiu} />
                        <Route path='/juanshi' component={Juanshi} />
                        
                        <Route path='/juanyi1' component={Juanyi1} />
                        <Route path='/juaner1' component={Juaner1} />
                        <Route path='/juansan1' component={Juansan1} />
                        <Route path='/juansi1' component={Juansi1} />
                        <Route path='/juanwu1' component={Juanwu1} />
                        <Route path='/hanshu' component={Hanshu} />
                        <Route path='/daoshu' component={Daoshu} />
                        <Route path='/sanjiao' component={Sanjiao} />
                        <Route path='/xiangliang' component={Xiangliang} />
                        <Route path='/jiesan' component={Jiesan} />
                        <Route path='/shulie' component={Shulie} />
                        <Route path='/liti' component={Liti} />
                        <Route path='/jiexi' component={Jiexi} />
                        <Route path='/gailu' component={Gailu} />
                        <Route path='/a' component={a} />
                    </Switch>
               </div>
            </Router>
        )
    }
}


/*
    自定义hook
 */
function useFetch(url){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setData(res.content)
            })
    })
    return data;
}


/*
    我的
 */
//铃铛
function Notice(){
    // let data=useFetch();
    return (
        <div>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >消息通知</NavBar>
        </div>
    )
}
//我的作业
function Work(){
    // let data=useFetch('https://cnodejs.org/api/v1/topics');
    return (
        <div style={{background:'url(../img/yun.png) center center no-repeat',height:'618px'}}>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white',fontFamily:'Kaiti'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的日程</NavBar>
            <WhiteSpace/>
            <WingBlank>
                <h4 style={{fontFamily:'Kaiti',fontWeight:"bolder"}}>在这里制定您今天的任务</h4>
                <Todolist/>
            </WingBlank>
        </div>
    )
}
//我的错题
function Wrong(){

    return (
        <div>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的错题</NavBar>
        </div>
    )
}
// //我的年级
// function Grade(){
//     return (
//         <div>
//             <NavBar
//                 style={{backgroundColor:'#099ff5',color:'white'}}
//                 leftContent={[
//                     <Link to='/app/mine'>
//                         <Icon key="0" type="left" style={{color:'white'}} />
//                     </Link>
//                 ]}
//             >修改信息</NavBar>
//         </div>
//     )
// }
//我的收藏
function Collect(){
    let data=useFetch('http://129.211.62.80:8080/essay');
    return (
        <div style={{background:'url(../img/yun.png) center center no-repeat',height:'618px'}}>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的收藏</NavBar>
            <WhiteSpace/>
            <WingBlank>
                {
                    data.reverse().map((item,index)=>
                    <li key={index} style={{width:"100%",height:'40px',marginTop:'5px',borderBottom:'1px solid #099ff5'}}>
                        <div style={{width:'30px',height:"40px",textAlign:'center',lineHeight:'40px',float:'left'}}>{item.sno}</div>
                        <div style={{width:"265px",height:'40px',float:'left',textAlign:'center',lineHeight:'40px'}}>{item.scontent}</div>
                    </li>)
                }
            </WingBlank>
        </div>
    )
}


/*
    设置页面
*/
//帮助中心
function Help(){
    // let data=useFetch();
    return (
        <div style={{fontFamily:'Kaiti'}}>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >常见问题</NavBar>
            <WhiteSpace/>
            <WingBlank>
                <h1>常见N多问题</h1>
                <p style={{color:'blue',fontSize:'15px'}}>01.找不到想要的学习资料怎么办？</p>
                <p>填写完整的个人信息，有助于您更准确的找到所需学习资料</p>
                <p style={{color:'blue',fontSize:'15px'}}>02.收不到验证码怎么办？</p>
                <p>绑定手机号需要验证码，请保持手机畅通。由于手机的一些设置，验证码短信可能会被拦截，
                    考虑到以上问题，您可以选择“重发验证码”</p>
                <p style={{color:'blue',fontSize:'15px'}}>03.数友应用是否会向用户收费？</p>
                <p>本平台在此郑重向每一位用户承诺，我们的服务永久免费，不会向用户收取任何费用。</p>
                <p style={{color:'blue',fontSize:'15px'}}>04.我的竞赛纪录是否会被永久保留？</p>
                <p>由于数据库容量限制，您的竞赛纪录只会保留最近2个月，但竞赛数据会永久保留，敬请谅解。</p>
                <p style={{color:'blue',fontSize:'15px'}}>05.用户名或密码忘记怎么办？</p>
                <p>如果忘记密码可以直接使用验证码登录，忘记用户名也是没有关系的，您可以自由选择使用用户名登录或者手机号登录</p>
                <p style={{color:'blue',fontSize:'15px'}}>06.我有好的题目，想要在此贡献怎么办？</p>
                <p>我们平台会定期发布公告，向广大用户收集精华题目，题目被收录的作者，还可以获得平台送出的精美礼品哦！</p>
                <WhiteSpace/>
                <p style={{color:'red'}}>疑问还未解决？请移步“设置→意见反馈”</p>
            </WingBlank>
        </div>
    )
}
//意见反馈
function Opinion(){
    return (
        <div style={{fontFamily:'Kaiti'}}>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/s'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
            >意见反馈</NavBar>
            <WhiteSpace/>
            <WingBlank>
                <span>告诉我们您所遇到的问题，可输入10~1000字</span>
                <textarea rows="5" cols="40" placeholder='完整描述您的问题，有助于得到更精确的答复' style={{marginTop:'10px'}}/>
            </WingBlank>
            <WingBlank>
                <span  style={{marginTop:'10px'}}>联系电话：</span>
                <input style={{width:'100px',height:'25px',marginTop:'10px'}}/>
                <br/>
                <span style={{marginTop:'10px'}}>电子邮箱：</span>
                <input style={{width:'150px',height:'25px',marginTop:'10px'}}/>
                <p><input type="checkbox" name="item"/><label>允许客服通过电话联系我</label></p>
                {/* <label>允许客服通过电话联系我</label> */}
                <p style={{color:'grey'}}>(若不选，则默认通过短信或邮件方式答复)</p>
            </WingBlank>
            <button style={{float:'left',backgroundColor:'#099ff5',border:'1px solid #099ff5',marginLeft:'12px',marginTop:'10px',textAlign:'center'}}>提交</button>
            
        </div>
    )
}
//关于我们
function Aboutus(){
    return (
        <div style={{width:'100%',fontFamily:'Kaiti'}}>
            <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                leftContent={[
                    <Link to='/app/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >关于我们</NavBar>
            <p style={{marginLeft:'20px'}}>公司名称：石家庄数友科技有限公司</p>
            <p style={{marginLeft:'20px'}}>联系方式：0311-88888888</p>
            <p style={{marginLeft:'20px'}}>企业邮箱：shuyoukeji@163.com</p>
            <p style={{marginLeft:'20px'}}>公司地址：河北省石家庄市裕华区××街道××路×号</p>
            <p style={{marginLeft:'20px'}}>邮编：050024</p>

            
        </div>
    )
}