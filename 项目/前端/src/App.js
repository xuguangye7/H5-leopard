import React, { Component,useState,useEffect } from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel,WingBlank,Tabs} from 'antd-mobile';
import AppTab from './container/AppTab'
import Home from './container/Home';
import Talk from './container/Talk'
import Subject from './container/Subject'
import Mine from './container/Mine'
import Setting from './container/Setting'
import Login from './container/Login'
import Detail from './components/Detail'
import Regiset from './container/Regiset'
import Forget from './container/Forget'
// import reducer from './reducer'
// import CheckLogin from './components/CheckLogin';

// const store = createStore(reducer, compose(
//     applyMiddleware(thunk), //解决redux异步问题
//     window.devToolsExtension ? window.devToolsExtension() : f => f // chrome控制台redux工具
// ))
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="content">
                        <Route path='/home' component={Home}/>
                        <Route path='/talk' component={Talk}/>
                        <Route path='/subject' component={Subject}/>
                        <Route path='/mine' component={Mine}/>
                        <Route path='/s' component={Setting}/>
                        <Route path='/xinxi' component={Aboutus}/>
                        <Route path='/opinion' component={Opinion}/>
                        <Route path='/help' component={Help}/>
                        <Route path='/wrong' component={Wrong}/>
                        <Route path='/grade' component={Grade} />
                        <Route path='/collect' component={Collect} />
                        <Route path='/work' component={Work} />
                        <Route path='/notice' component={Notice} />
                        <Route exact path='/' component={Login} />
                        <Route path='/study' component={Study} />
                        <Route path='/topics' component={Detail}/>
                        <Route path='/regiset' component={Regiset} />
                        <Route path='/forget' component={Forget} />
                        <Route path='/add' component={Add} />
                    </div>
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
                setData(res.data)
            })
    })
    return data;
}

/*
    首页
 */
//学习
function Study(){
    // let data=useFetch();
    const tabs2 = [
        { title: '方程的解', sub: '1' },
        { title: '二次函数', sub: '2' },
        { title: '旋转', sub: '3' },
        { title: '圆', sub: '4' },
    ];
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/home'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >学习</NavBar>
            <div style={{width:'100%',textAlign:'center',height:'50px',lineHeight:'50px',fontSize:'20px'}}>
                数学九年级上册
            </div>
            <Tabs tabs={tabs2}>
                <div style={{width:'100%'}}>
                    <h3>二次函数的图像和性质</h3>
                    <List className="my-list">
                    <Link to={'/topics/'}>
                        <Item
                        platform="android"
                        >
                        二次函数
                        </Item>
                    </Link>
                    <WhiteSpace />
                    <Link to='/detail'>
                        <Item
                        >
                        二次函数的性质
                        </Item>
                    </Link>
                    <WhiteSpace />
                    <Link to='/detail'>
                        <Item 
                        >
                            二次函数的图像
                        </Item>
                    </Link>
                    <WhiteSpace />
                </List>
                <h3>二次函数与一元二次方程</h3>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Tabs>
        </div>
    )
}
/*
    题库
 */

/*
社区
 * 
 */
//发表言论
function Add(){
    return (
        <div>
            <NavBar
                style={{color:'#000',background:"blue"}}
                leftContent={[
                    <Link to='/talk'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >言论</NavBar>
            <div id="talk">
                <div style={{
                    outline:'1px solid #eee',
                    border: '1px solid #ccc',
                    background: 'white',
                    padding: '9px',
                    height: '200px',
                    width: '100%',
                    fontSize: '12px'
                }} contenteditable="true" name="content" id="ct"></div>
                <button style={{
                    color:'white',
                    background:"blue",
                    border:'1px solid blue',
                    width:'80px',
                    height:'30px'
                }} id="sub">发表</button>
            </div>
        </div>
    )
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
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >消息通知</NavBar>
        </div>
    )
}
//我的作业
function Work(){
    let data=useFetch('https://cnodejs.org/api/v1/topics');
    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的作业</NavBar>
            {
                data.map((item,index)=><p key={index}>{item.tab},{item.content}</p>)
            }
        </div>
    )
}
//我的错题
function Wrong(){
    let data=useFetch('https://cnodejs.org/api/v1/topics');

    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的错题</NavBar>
            {
                data.map((item,index)=><p key={index}>{item.tab},{item.content}</p>)
            }
        </div>
    )
}
//我的年级
function Grade(){
    let data=useFetch('http://127.0.0.1:8080/');
    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的年级</NavBar>
            {
                data.map((item,index)=>
                    <p key={index} style={{
                        width:'100%',
                        height:'50px',
                        background:'#fff',
                        textAlign:'center',
                        lineHeight:'50px'
                    }}>你所选的年级是{item.class}</p>
                )
            }
        </div>
    )
}
//我的收藏
function Collect(){
    let data=useFetch('https://cnodejs.org/api/v1/topics');
    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/mine'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >我的收藏</NavBar>
            {
                data.map((item,index)=><p key={index}>{item.tab},{item.content}</p>)
            }
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
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/s'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
            >常见问题</NavBar>
            <WhiteSpace/>
            <WingBlank>
                <span style={{color:'blue',fontSize:'15px'}}>找不到学习资料怎么办？</span>
                <p>您可以通过完善好个人信息更好的找到您所需要的学习资料</p>
                <WhiteSpace/>
            </WingBlank>
        </div>
    )
}
//意见反馈
function Opinion(){
    return (
        <div>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/s'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
            >意见反馈</NavBar>
            <WhiteSpace/>
            <WingBlank>
                <span>告诉我们您所遇到的问题，不少于10个字</span>
                <WhiteSpace/>
                <input style={{width:'100%',height:'200px'}}>

                </input>
            </WingBlank>
            <WingBlank>
                <span>您的联系方式</span>
                <WhiteSpace/>
                <input type='text' placeholder="据说留下联系方式的人，问题100%都能解决" style={{width:'100%',height:'30p'}}/>
            </WingBlank>
            
        </div>
    )
}
//关于我们
function Aboutus(){
    return (
        <div style={{width:'100%'}}>
            <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/s'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >关于我们</NavBar>
            <span style={{fontSize:"24px",position:'fixed',top:'100px'}}>这回事一款关于学习数学的软件</span>
        </div>
    )
}