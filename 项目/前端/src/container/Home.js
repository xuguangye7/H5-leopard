import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, SearchBar } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: '176',
      }
    render() {
        return (
            <div style={{
              backgroundColor:''
            }}>
                <NavBar
                style={{backgroundColor:'blue',color:'white',textShadow:'2px 2px 2px red',textAlign:'center'}}
                ><h3>数学天地</h3></NavBar>
                <SearchBar 
                  placeholder="圆锥曲线"
                  ref={ref => this.manualFocusInst = ref}
                  style={{
                    backgroundColor:'rgb(8, 217, 245)',

                  }}
                />
                <WhiteSpace/>
                <div style={{width:'100%',
                    background:'url(img/sx.jpg) center center /  100% 180px no-repeat',
                    height:'180px',
                    textAlign:'center',
                    lineHeight:'180px',
                    color:'blue',
                    fontSize:'30px'
                }}>
                    欢迎来到数学圣地
                </div>
                <WhiteSpace/>
               <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[0,1].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%',height:'200px' }}
                        >
                        <img
                            src={`img/shuxue${val}.jpg`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace/>
                <Link to='/study'>
                    <Button style={{color:'white',background:'blue'}}>开始学习</Button>
                </Link>
                <WhiteSpace/>
                <div style={{
                  width:'100%',
                  height:'350px'
                }}>
                  <p style={{
                    width:'100%',
                    textAlign:'center',
                    fontSize:'20px',
                    margin:''
                  }}>特级教师在线教学</p>
                  <img src='img/timg.jpg'style={{
                    width:'100%'
                  }}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

