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
import Juanyi from './container/Juanyi'
import Juaner from './container/Juaner'
import Juansan from './container/Juansan'
import Hanshu from './container/Hanshu'
import Daoshu from './container/Daoshu'
import Sanjiao from './container/Sanjiao'
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
                      <Route path='/juanyi' component={Juanyi}/>
                      <Route path='/juaner' component={Juaner}/>
                      <Route path='/juansan' component={Juansan}/>
                      <Route path='/hanshu' component={Hanshu}/>
                      <Route path='/daoshu' component={Daoshu}/>
                      <Route path='/sanjiao' component={Sanjiao}/>
                  </div>
              </div>
          </Router>
      )
  }
}
