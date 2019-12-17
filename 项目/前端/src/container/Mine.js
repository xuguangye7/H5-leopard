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
            <div style={{height:'800px',backgroundColor:"#fff",fontFamily:'Kaiti'}}>
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
                ><h3>我的</h3></NavBar>
                {/* <WingBlank> */}
                    <div style={{width:'100%',height:'100px'}}>
                        <span style={{fontSize:'18px'}}>
                        <Link to="/a" style={{width:'100%',height:'100px',}}>
                            <img src='http://129.211.62.80:8080/api/images' style={{float:'left',marginLeft:'20px',marginTop:'33px',width:'50px',height:'50px',borderRadius:'25px'}}></img>
                            </Link>
                            {
                                this.state.data.map((item,index)=>
                                    <b key={index} style={{
                                        width:'200px',
                                        float:'left',
                                        marginTop:'50px'
                                    }}>&nbsp;&nbsp;&nbsp;{item.nicheng}</b>
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
                    <Link to='/help'>
                        <Item
                        arrow="horizontal"
                        thumb="../img/bangzhuzhongxin.png"
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        >
                        帮助中心
                        </Item>
                    </Link>
                    <Link to='/xinxi'>
                        <Item 
                        arrow="horizontal" 
                        thumb="../img/bangzhuguanyuwomen.png"
                        multipleLine 
                        onClick={() => {}}
                        >
                            关于我们
                        </Item>
                    </Link>
                    {/* <Link to='/collect'>
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
                    <WhiteSpace/> */}
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
