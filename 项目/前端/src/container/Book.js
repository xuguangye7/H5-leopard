import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar, WingBlank,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Ziliao extends Component {
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
                leftContent={[
                    <Link to='/app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>参考书推荐</h3></NavBar>
                <WingBlank>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <div style={{width:'100%',height:'130px',borderBottom:'1px solid rgb(8, 217, 245)'}}> 
                        <a href='http://product.dangdang.com/25316800.html?_ddclickunion=419-931918%7C00X77630b326a9d10ea8|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpsyem6nwapnn6vni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2swlto1njlf9b7y5l-'>
                            <img src='../img/ben1.jpg' style={{width:'110px',height:'110px',float:'left',paddingRight:'10px'}}></img>
                        </a>
                        
                        <a href='http://product.dangdang.com/25316800.html?_ddclickunion=419-931918%7C00X77630b326a9d10ea8|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpsyem6nwapnn6vni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2swlto1njlf9b7y5l-'
                            style={{color:'black',fontSize:'14px'}}>
                            数学(高中下册)(华师大二附中实验班用)新版
                        </a>
                        <p style={{fontSize:'10px'}}>&nbsp;</p>
                        <span style={{color:'grey'}}>当当网</span>
                        <a href='http://product.dangdang.com/25316800.html?_ddclickunion=419-931918%7C00X77630b326a9d10ea8|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpsyem6nwapnn6vni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2swlto1njlf9b7y5l-'>
                            <button style={{fontSize:'15px',marginTop:'7px',width:'90px',height:'30px',float:'right',borderRadius:'10px',background:'white',color:'red',border:'1.5px solid red'}}><span style={{}}>官方购买</span></button>
                        </a>
                    </div>
                    <WhiteSpace/>
                    <div style={{width:'100%',height:'140px',marginTop:'12px',borderBottom:'1px solid rgb(8, 217, 245)'}}> 
                        <a href='http://product.dangdang.com/1504952499.html?_ddclickunion=419-931918%7C00X73bd6d39da1b9974a|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpspypop7vdwwevni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfltswnde6n271nwdczgvyj--'>
                            <img src='../img/ben2.jpg' style={{width:'110px',height:'110px',float:'left',paddingRight:'10px'}}></img>
                        </a>
                        
                        <a href='http://product.dangdang.com/1504952499.html?_ddclickunion=419-931918%7C00X73bd6d39da1b9974a|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpspypop7vdwwevni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfltswnde6n271nwdczgvyj--'
                            style={{color:'black',fontSize:'14px'}}>
                            2020版教材完全解读高中数学必修一人教版RJA王后雄学案
                        </a>
                        <p style={{fontSize:'10px'}}>&nbsp;</p>
                        <span style={{color:'grey'}}>当当网</span>
                        <a href='http://product.dangdang.com/1504952499.html?_ddclickunion=419-931918%7C00X73bd6d39da1b9974a|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqypoq7mpu13wzogn4vrwwopbygntpspw4m6wflrl6xktpspypop7vdwwevni793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfltswnde6n271nwdczgvyj--'>
                        <button style={{fontSize:'15px',width:'90px',height:'30px',float:'right',borderRadius:'10px',background:'white',color:'red',border:'1.5px solid red'}}><span style={{}}>官方购买</span></button>
                        </a>
                    </div>
                    <WhiteSpace/>
                    <div style={{width:'100%',height:'140px',marginTop:'12px',borderBottom:'1px solid rgb(8, 217, 245)'}}> 
                        <a href='http://product.dangdang.com/27854838.html?_ddclickunion=419-931918%7C00X7a266bec1d3b92c99|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dclsf1qtq6c63nq446wbqnwvyrwwopn4vntpspnm2p7ptyq4duoqqncuqwpawnsubpkzsyqb5rwwopnwsgzwogpxb6ekopn4wfp793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2m1nk71nwff9b7y5l-'>
                            <img src='../img/ben3.jpg' style={{width:'110px',height:'110px',float:'left',paddingRight:'10px'}}></img>
                        </a>
                        
                        <a href='http://product.dangdang.com/27854838.html?_ddclickunion=419-931918%7C00X7a266bec1d3b92c99|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dclsf1qtq6c63nq446wbqnwvyrwwopn4vntpspnm2p7ptyq4duoqqncuqwpawnsubpkzsyqb5rwwopnwsgzwogpxb6ekopn4wfp793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2m1nk71nwff9b7y5l-'
                            style={{color:'black',fontSize:'14px'}}>
                            高中数学基础知识手册高一高二高三教辅辅导数学定理公式清单
                        </a>
                        <p style={{fontSize:'10px'}}>&nbsp;</p>
                        <span style={{color:'grey'}}>当当网</span>
                        <a href='http://product.dangdang.com/27854838.html?_ddclickunion=419-931918%7C00X7a266bec1d3b92c99|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fp.gouwubang.com%2Fl%3Fl%3Dclsf1qtq6c63nq446wbqnwvyrwwopn4vntpspnm2p7ptyq4duoqqncuqwpawnsubpkzsyqb5rwwopnwsgzwogpxb6ekopn4wfp793mpsr9pdub6_uq4emnsd4cdoczg7rnu_fmxsyogs3mddmjbdmogby9rd3oovfl2m1nk71nwff9b7y5l-'>
                        <button style={{fontSize:'15px',width:'90px',height:'30px',float:'right',borderRadius:'10px',background:'white',color:'red',border:'1.5px solid red'}}><span style={{}}>官方购买</span></button>
                        </a>
                    </div>
                    <WhiteSpace/>
                    <div style={{width:'100%',height:'140px',marginTop:'12px',borderBottom:'1px solid rgb(8, 217, 245)'}}> 
                        <a href='https://item.jd.com/28977822828.html'>
                            <img src='../img/ben4.jpg' style={{width:'110px',height:'110px',float:'left',paddingRight:'10px'}}></img>
                        </a>
                        
                        <a href='https://item.jd.com/28977822828.html'
                            style={{color:'black',fontSize:'14px'}}>
                            2020新版薛金星高中数学基础知识手册
                        </a>
                        <p style={{fontSize:'10px'}}>&nbsp;</p>
                        <span style={{color:'grey'}}>京东网</span>
                        <a href='https://item.jd.com/28977822828.html'>
                        <button style={{fontSize:'15px',marginTop:'7px',width:'90px',height:'30px',float:'right',borderRadius:'10px',background:'white',color:'red',border:'1.5px solid red'}}><span style={{}}>官方购买</span></button>
                        </a>
                    </div>
                    <WhiteSpace/>
                    <div style={{width:'100%',height:'140px',marginTop:'12px',borderBottom:'1px solid rgb(8, 217, 245)'}}> 
                        <a href='https://item.jd.com/61026908746.html'>
                            <img src='../img/ben5.jpg' style={{width:'110px',height:'110px',float:'left',paddingRight:'10px'}}></img>
                        </a>
                        
                        <a href='https://item.jd.com/61026908746.html'
                            style={{color:'black',fontSize:'14px'}}>
                            2020新版星一本高考题文数高中文科数学辅导书
                        </a>
                        <p style={{fontSize:'10px'}}>&nbsp;</p>
                        <span style={{color:'grey'}}>京东网</span>
                        <a href='https://item.jd.com/61026908746.html'>
                        <button style={{fontSize:'15px',marginTop:'7px',width:'90px',height:'30px',float:'right',borderRadius:'10px',background:'white',color:'red',border:'1.5px solid red'}}><span style={{}}>官方购买</span></button>
                        </a>
                    </div>
                    {/* <WhiteSpace style={{backgroundColor:"#fff"}}/> */}
                    
                </WingBlank>
            </div>
        )
    }
}
