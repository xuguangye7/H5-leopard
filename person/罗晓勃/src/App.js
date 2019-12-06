import React, { Component,useState,useEffect ,Fragment} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel,WingBlank,Tabs} from 'antd-mobile';
import AppTab from './container/AppTab'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppTab/>
                    {/* <div className="content">
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
                    </div> */}
                </div>
            </Router>
        )
    }
}