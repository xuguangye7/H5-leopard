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
                style={{backgroundColor:'rgb(8, 217, 245)',color:'white',textShadow:'2px 2px 2px red',textAlign:'center'}}
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
                    backgroundColor:'blue',
                    height:'180px',
                    textAlign:'center',
                    //lineHeight:'180px',
                    color:'#fff',
                    fontSize:'20px',
                    textShadow:'3px 3px 3px red'
                }}>
                    <p style={{
                      fontSize:'30px',
                      margin:'0',
                      marginTop:'5%',
                      marginLeft:'2%',
                      float:'left'
                    }}
                    
                    >咸鱼也有理想</p>
                    <br/>
                    <p style={{
                      fontSize:'30px',
                       margin:'0',
                       marginTop:'10%',
                      marginRight:'3%',
                      float:'right'
                    }}>我们帮你学好数学</p>
                </div>
                <WhiteSpace/>
                {/* <Carousel
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
                </Carousel> */}
                <Carousel style={{padding: '16px',overflow: 'hidden',background:'rgb(8, 217, 245)'}}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
            //   href=""
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`img/shuxue${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'176' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '176' });
                }}
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

