import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Shouye from './container/Shouye'
import Tiezi from './container/Tiezi'
import Wenjian from './container/Wenjian'
import Yonghu from './container/Yonghu'
import Xitong from './container/Xitong'
import Hlogin from './container/Hlogin'
import Hzhuce from './container/Hzhuce'
export default class App extends Component {
  render() {
      return (
          <Router> 
              <div>
                  <div className="content">
                      <Route exact path='/' component={Hlogin}/>
                      <Route path='/zhuce' component={Hzhuce}/>
                      <Route path='/shouye' component={Shouye}/>
                      <Route path='/xitong' component={Xitong}/>
                      <Route path='/yonghu' component={Yonghu}/>
                      <Route path='/wenjian' component={Wenjian}/>
                      <Route path='/tiezi' component={Tiezi}/>
                  </div>
              </div>
          </Router>
      )
  }
}
