import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel, WingBlank } from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                >数学天地</NavBar>
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
                <Footer/>
            </div>
        )
    }
}
