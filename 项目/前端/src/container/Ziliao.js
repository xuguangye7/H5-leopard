import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List,Carousel} from 'antd-mobile'
const tabs2 = [
    { title: '函数', sub: '1' },
    { title: '解三角', sub: '2' },
    { title: '平面向量', sub: '3' },
    { title: '三角函数', sub: '4' },
    { title: '立体几何', sub: '5' },
    { title: '数列', sub: '6' },
    { title: '概率统计', sub: '7' },
    { title: '解析几何', sub: '8' },
    { title: '导数', sub: '9' },
];
const Item = List.Item;
export default class Ziliao extends Component {
    render() {
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>专题</h3></NavBar>
                <Carousel style={{
                        paddingTop:'10px',
                        background: '#fff',
                        overflow: 'hidden',
                    }}
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        >
                        {[1,2,3,4].map((val, index) => (
                            <a
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                            >
                            <img
                                src={`../img/lun${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'180px' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                <Tabs tabs={tabs2}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    style={{
                        
                    }}
                    >
                        
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=1'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    函数的定义<span style={{marginLeft:'180px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=2'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    函数的性质
                                    </Item>
                                </Link>
                                <Link to='/ziliao:id=3'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    基本初等函数
                                    </Item>
                                </Link>
                                <Link to='/ziliao:id=4'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    函数的的应用
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=5'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    解三角<span style={{marginLeft:'210px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='ziliao:id=6'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    三角形的面积公式
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=7'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    向量的基本概念与运算<span style={{marginLeft:'80px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=8'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    平面向量的坐标表示
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=9'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    平面向量的向量积
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=10'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    特殊角的三角函数值<span style={{marginLeft:'110px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=11'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    角度制与弧度制的互化
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=12'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    弧长及面积公式
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=13'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    几种立体几何的特征<span style={{marginLeft:'110px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=14'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    空间中的位置关系
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=15'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    等差数列<span style={{marginLeft:'200px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=16'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    等比数列
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=17'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    其他数列
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=18'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    概率的基本概念<span style={{marginLeft:'140px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=19'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    概念的基本性质
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=20'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    古典概型
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=21'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    几何概型
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=22'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    椭圆<span style={{marginLeft:'220px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=23'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    直线
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=24'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    抛物线
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=25'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    圆
                                    </Item>
                                </Link>
                                <WhiteSpace />
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                            <List style={{}}>
                    
                                <Link to='/ziliao:id=26'>
                                    <Item 
                                    arrow="horizontal" 
                                    multipleLine 
                                    onClick={() => {}}
                                    >
                                    基本概念<span style={{marginLeft:'185px'}}/>
                                    </Item>
                                </Link>
                                    
                                <Link to='/ziliao:id=27'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    导数的运算
                                    </Item>
                                </Link>
                                <WhiteSpace />
                                <Link to='/ziliao:id=28'>
                                    <Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => {}}
                                    platform="android"
                                    >
                                    导数的应用
                                    </Item>
                                </Link>
                            </List>
                            </div>
                        </WingBlank>
                    </div>
                </Tabs>
            </div>
        )
    }
}
