import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
import Footer from '../components/Footer'
const tabs2 = [
    { title: '方程的解', sub: '1' },
    { title: '二次函数', sub: '2' },
    { title: '旋转', sub: '3' },
    { title: '圆', sub: '4' },
];
const Item = List.Item;
const Brief = Item.Brief;
export default class Subject extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
    render() {
        return (
            <div>
               <NavBar
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>题库</h3></NavBar>
                
                <Footer/>
            </div>
        )
    }
}
