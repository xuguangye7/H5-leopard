import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,SearchBar, WingBlank,Grid,Tabs,Badge } from 'antd-mobile';
import './Home.css'
const arr=['资料','题库','大学','更多'];
const data = Array.from(new Array(4)).map((_val, i) => ({
    icon:'img/grid'+(i+1)+'.png',
     text: arr[i],
  }));
  const tabs = [
    { title: <Badge text={'3'}>每日热点</Badge> },
    { title: <Badge dot>今日任务</Badge> },
  ];
export default class Home extends Component {
    render() {
        return (
            <div style={{
                width:'100%',
                height:'100%',
                zIndex:'10',
                //backgroundColor:'white'

            }}>
                <NavBar
                style={{
                    backgroundColor:'#099ff5',
                    color:'white',
                    height:'60px',

                }}
                >数学天地
                </NavBar>
                <WhiteSpace/>
                <SearchBar placeholder="输入查询知识" ref={ref => this.autoFocusInst = ref} style={{
                    height:'55px',
                    width:'90%',
                    margin:'0 auto',
                    backgroundColor:'white',
                    border:'solid 2px #099ff5',
                    borderRadius:'10px',
                }}/>
                <WhiteSpace/>
                <div style={{
                    position:'relative',
                    width:'90%',
                    height:'30%',
                    margin:'0 auto',
                    borderRadius:'5%',
                }}>
                   <img src="img/lantian.jpg"
                   style={{
                       position:'absolute',
                       top:'0',
                       left:'0',
                       width:'100%',
                       height:'100%',
                       borderRadius:'5%',
                       zIndex:'-1',
                       opacity:'0.7'
                   }}/>
                   <p style={{
                       fontSize:'25px',
                       color:'black',
                       float:'left',
                       textShadow:'2px 2px gray',
                       marginLeft:'18%',
                       marginTop:'12%'
                   }}>高考倒计时---</p>
                   <p style={{
                       fontSize:'30px',
                       color:'black',
                       float:'left',
                       textShadow:'2px 2px gray',
                       marginLeft:'5%',
                       marginTop:'10%'
                       
                   }}>4天</p>
                   <p style={{
                       fontSize:'20px',
                       color:'#099ff5',
                       float:'left',
                       textShadow:'2px 2px black',
                       marginLeft:'20%',
                       marginTop:'10%'
                   }}>别怕，我们帮你学会数学</p>
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'90%',
                    margin:'0 auto',
                }}>
                <Grid data={data} hasLine={false} columnNum={2}
                        renderItem={dataItem => (
                            <div>
                            <img src={dataItem.icon} style={{ width: '50%', height: '50%' }} alt="" />
                            <div style={{fontSize: '18px',color:'#099ff5'}}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                            
                        )}
                    />
                </div>
                <WhiteSpace/>
                <div style={{
                    width:'90%',
                    margin:'0 auto',
                    height:'50%'
                }}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div style={{ display: 'flex',  justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                            <div style={{
                                width:'100%',
                                height:'150px',
                            }}>
                                <div style={{
                                    width:'100%',
                                    float:'flet'
                                }}>
                                    <img src="img/weixin.png" style={{
                                        width:'50px',
                                        height:'50px',
                                        float:'left'
                                    }}/>
                                    <div style={{
                                        float:'left'
                                        }}>
                                        离高考还有十六天，现在我终于明白了那些曾经毫不在意的话
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{
                                width:'100%',
                                height:'150px',
                            }}>
                                <div style={{
                                    width:'100%',
                                    float:'flet'
                                }}>
                                    <img src="img/weixin.png" style={{
                                        width:'50px',
                                        height:'50px',
                                        float:'left'
                                    }}/>
                                    <div style={{
                                        float:'left'
                                        }}>
                                        离高考还有十六天，现在我终于明白了那些曾经毫不在意的话
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                        </Tabs>
                </div>
            </div>
        )
    }
}
