import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank,List} from 'antd-mobile';
import Footer from '../components/Footer'
const Item = List.Item;
export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/api/get')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
            })
    }
    render() {
        return (
            <div style={{height:'800px',backgroundColor:"#fff"}}>
                <NavBar
                style={{backgroundColor:'#099ff5',color:'white'}}
                // rightContent={[
                //     <Link to='/s'>
                //         <img src="../img/icon-test.png" style={{width:'25%',marginLeft:'70px'}}/>
                //     </Link>
                // ]}
                // leftContent={[
                //     <Link to='/notice'>
                //         <img src="../img/icon_notice.png" style={{width:'25%',marginLeft:'10px'}}/>
                //     </Link>
                // ]}
                >我的</NavBar>
                {/* <WingBlank> */}
                    <div style={{width:'100%',height:'100px',backgroundColor:'#f6f6f9'}}>
                        <span style={{fontSize:'18px'}}>
                            <img src={`../img/头像 男孩.png`} style={{marginLeft:'20px',marginTop:'33px'}}></img>
                            {/* <b>&nbsp;&nbsp;&nbsp;{this.state.data.unicheng}</b> */}
                            {
                                this.state.data.map((item,index)=>
                                    <b key={index}>&nbsp;&nbsp;&nbsp;{item.nicheng}</b>
                                )
                            }

                        </span>
                    </div>
                {/* </WingBlank> */}
                <WhiteSpace/>
                <List className="my-list" style={{backgroundColor:"#f6f6f9"}}>
                    
                    <Link to='/work'>
                        <Item 
                        arrow="horizontal" 
                        thumb="../img/jishiben.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                        我的日程
                        </Item>
                    </Link>
                    
                    <Link to='/collect'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/wodeshoucang.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的收藏
                        </Item>
                    </Link>
                    <Link to='/wrong'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/cuoti.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        我的错题
                        </Item>
                    </Link>
                    <WhiteSpace/>
                </List>
                <WhiteSpace/>
                <List>
                <Link to='/s'>
                    <Item
                    arrow="horizontal"
                    thumb="../img/设置.png"
                    multipleLine
                    onClick={() => {}}
                    platform="android"
                    >
                    设置
                    </Item>
                </Link>
                </List>
                <Footer/>
            </div>
        )
    }
}
