import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Wenjian extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_name1: 'none', //此状态机为display的取值
            display_name: 'block',
            data:[]
        }
    }
    chang=()=>{
        this.setState({
            display_name: 'block', //此状态机为display的取值
            display_name1: 'none'
        })
    }
    chang1=()=>{
        this.setState({
            display_name1: 'block', //此状态机为display的取值
            display_name: 'none'
        })
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/tiku')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/tiku')
            .then((res)=>res.json(res))
            .then((res)=>{
                this.setState({data:res.content});
            })
    }
    delete=(idx)=>{
        console.log(idx)
        fetch('http://129.211.62.80:8080/tiku/delete?sno='+idx.sno)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
            })
    }
    render() {
        return (
            <div style={{height:'800px',width:'1400px',margin:"0 auto"}}>
                <div style={{
                    background:'rgb(0,128,90)',
                    float:'left',
                    height:'800px',
                    width:'350px'

                }}>
                    <div style={{
                        width:'100%',
                        height:'200px'
                    }}>
                        <img src="../img/shu.jpg" style={{width:'100px',height:'100px',marginLeft:'125px',marginTop:'20px',float:'left'}} />
                    </div>
                    <div style={{
                        width:'300px',
                        margin:'0 auto',
                        height:'500px',
                    }}>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/shouye0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/shouye'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    首页
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/系统0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/xitong'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    系统管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/用户0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/yonghu'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    用户管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                        }}>
                            <img src="../img/帖子0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/tiezi'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    帖子管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                        <div style={{
                            width:'300px',
                            height:'42px',
                            float:'left',
                            marginTop:'20px',
                            background:'rgb(0,128,90)'
                        }}>
                            <img src="../img/文件0.png" style={{width:"30px",height:"30px",float:'left',marginLeft:'15px'}} />
                            <Link to='/wenjian'>
                                <a style={{marginLeft:'10px',marginTop:'5px',float:'left',color:'#fff'}} href=''>
                                    文件管理
                                </a>
                            </Link>
                            <div style={{width:'300px',height:'2px',background:"#fff",float:'left',marginTop:'10px'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width:'1050px',
                    height:'800px',
                    float:'left'
                }}>
                    {/* <div style={{
                        width:'100%',
                        height:'100px',
                        float:'left'
                    }}>
                        <form action="">
                            <input type="search" placeholder="请输入你要查找的关键字" style={{textAlign: 'center',float:"left",width:"300px",height:"40px",marginTop:'25px',marginLeft:'35px',borderRadius:'10px',border:'1px solid rgb(105,96,96)'}}/>
                            <img src="../img/email.png" alt=""
                            style={{
                                width:'40px',
                                height:'30px',
                                float: 'right', 
                                marginRight: '30px', 
                                marginTop: '30px',
                            }}/> 
                            <img src="../img/icon_notice.png" alt="" style={{
                                width:'30px',
                                height:'30px',
                                float: 'right', 
                                marginRight: '30px', 
                                marginTop: '30px',
                            }}/> 
                        </form>
                    </div> */}
                    <div style={{
                        width:'1050px',
                        height:"100px",
                        float:'left',
                        marginTop:"10px"
                    }}>
                        <ul className="wendang">
                            <li>
                                <div style={{
                                    background:'rgb(130,185,185)',
                                    width:"200px",
                                    height:"60px",
                                    float:"left",
                                    borderRadius:"5px",
                                    textAlign:"center",
                                    lineHeight:"60px"
                                }} onClick={this.chang}>
                                    高考真题
                                </div>
                            </li>
                            <li>
                                <div style={{
                                    background:'rgb(130,185,185)',
                                    width:"200px",
                                    height:"60px",
                                    float:"left",
                                    marginLeft:"-20px",
                                    borderRadius:"5px",
                                    textAlign:"center",
                                    lineHeight:"60px"
                                }} onClick={this.chang1}>
                                    专题
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div style={{width:"1050px",float:"left",height:"80px"}}>
                        <div style={{
                            width:"250px",
                            height:"80px",
                            float:"left",
                            backgroundColor:"rgb(130,185,185)",
                            lineHeight:'80px',
                            textAlign:"center",
                            border:"1px solid tomato"
                        }}>序号</div>
                        <div style={{
                            width:"450px",
                            height:"80px",
                            float:"left",
                            backgroundColor:"rgb(130,185,185)",
                            lineHeight:'80px',
                            textAlign:"center",
                            border:"1px solid tomato"
                        }}>试卷题目</div>
                        <div style={{
                            width:"334px",
                            height:"80px",
                            float:"left",
                            backgroundColor:"rgb(130,185,185)",
                            lineHeight:'80px',
                            textAlign:"center",
                            border:"1px solid tomato"
                        }}>操作</div>
                    </div>
                    <div className="one" style={{
                        width:'1040px',
                        // marginTop:"100px",
                        // marginLeft:'10px',
                        float:'left',
                        marginTop:"1px",
                        display: this.state.display_name
                    }}>
                        <ul className="liebiao">
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>1</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年新课标全国统一高考数学卷一</span>
                                <Link to='juanyi'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>2</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年新课标全国统一高考数学卷二</span>
                                <Link to='juaner'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>3</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年新课标全国统一高考数学卷三</span>
                                <Link to='juansan'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            {
                                this.state.data.map((item,index)=>
                                <li>
                                <span style={{float:'left',marginLeft:'120px'}}>{item.sno}</span>
                                <span style={{float:"left",marginLeft:'180px'}}>{item.sname}</span>
                                
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    marginRight:'66px',
                                    color:'#fff',
                                    float: 'right',
                                    marginTop:'10px'
                                }} onClick={()=>this.delete(item)}> 删除</button>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    color:'#fff',
                                    float: 'right',
                                    marginRight:"0px",
                                    marginTop:'10px'
                                }}> 查看</button>
                            </li>
                                )
                            }
                            {/* <li>
                                <span style={{float:'left',marginLeft:'120px'}}>4</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2018年新课标全国统一高考数学卷一</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>5</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2018年新课标全国统一高考数学卷二</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>6</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年北京市高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>7</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年天津市高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>8</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年山东省高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>9</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年浙江省高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'110px'}}>10</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年上海市高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'110px'}}>11</span>
                                <span style={{float:"left",marginLeft:'180px'}}>2019年江苏省高考数学卷</span>
                                
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'320px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li> */}
                        </ul>
                    </div>
                    <div className="two" style={{
                        width:'1040px',
                        // marginTop:"100px",
                        // marginLeft:'10px',
                        float:'left',
                        display: this.state.display_name1
                    }}>
                        <ul className="liebiao">
                        <li>
                                <span style={{float:'left',marginLeft:'120px'}}>1</span>
                                <span style={{float:"left",marginLeft:'300px'}}>函数专题部分</span>
                                <Link to='hanshu'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'270px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link> 
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>2</span>
                                <span style={{float:"left",marginLeft:'300px'}}>导数专题部分</span>
                                <Link to='daoshu'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'270px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>3</span>
                                <span style={{float:"left",marginLeft:'290px'}}>三角函数专题部分</span>
                                <Link to='sanjiao'>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'250px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                </Link>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>4</span>
                                <span style={{float:"left",marginLeft:'290px'}}>平面向量专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'250px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>5</span>
                                <span style={{float:"left",marginLeft:'290px'}}>解三角形专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'250px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>6</span>
                                <span style={{float:"left",marginLeft:'300px'}}>数列专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'270px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>7</span>
                                <span style={{float:"left",marginLeft:'290px'}}>立体几何专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'250px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>8</span>
                                <span style={{float:"left",marginLeft:'290px'}}>解析几何专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'250px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                            <li>
                                <span style={{float:'left',marginLeft:'120px'}}>9</span>
                                <span style={{float:"left",marginLeft:'285px'}}>概率与统计专题部分</span>
                                <button style={{
                                    background:'green',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid green',
                                    marginLeft:'240px',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 查看</button>
                                <button style={{
                                    background:'red',
                                    height:'30px',
                                    width:'80px',
                                    border:'1px solid red',
                                    color:'#fff',
                                    float: 'left',
                                    marginTop:'10px'
                                }}> 删除</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}