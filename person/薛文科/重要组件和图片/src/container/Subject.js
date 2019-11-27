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
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'blue',color:'white'}}
                leftContent={[
                    <Link to='/home'>
                        <Icon key="0" type="left" style={{color:'white'}} />
                    </Link>
                ]}
                >题库</NavBar>
                <div style={{width:'100%',textAlign:'center',height:'50px',lineHeight:'50px',fontSize:'20px'}}>
                    数学九年级上册
                </div>
                <h2>
                    练习题
                </h2>
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
                <Footer/>
            </div>
        )
    }
}
