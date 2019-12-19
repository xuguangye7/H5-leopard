import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Zhengce extends Component {
    constructor(props, context) {
        super(props, context);
        this.state1 = {};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            display_name0: 'block', //此状态机为display的取值
            display_name1: 'none',
            display_name2: 'none',
            back_name:"#0d64cd",
            back_name1:"#fff",
            back_name2:"#fff",
            color_name:"#fff",
            color_name1:"#666666",
            color_name2:"#666666",

            display_name01: 'block', //此状态机为display的取值
            display_name11: 'none',
            display_name21: 'none',
            back_name01:"#0d64cd",
            back_name11:"#fff",
            back_name21:"#fff",
            color_name01:"#fff",
            color_name11:"#666666",
            color_name21:"#666666",

            display_name02: 'block', //此状态机为display的取值
            display_name12: 'none',
            display_name22: 'none',
            back_name02:"#0d64cd",
            back_name12:"#fff",
            back_name22:"#fff",
            color_name02:"#fff",
            color_name12:"#666666",
            color_name22:"#666666",
            display_name03: 'block', //此状态机为display的取值
            display_name13: 'none',
            display_name23: 'none',
            back_name03:"#0d64cd",
            back_name13:"#fff",
            back_name23:"#fff",
            color_name03:"#fff",
            color_name13:"#666666",
            color_name23:"#666666"
        }
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
      }
    chang=()=>{
        this.setState({
            display_name0: 'block', //此状态机为display的取值
            display_name1: 'none',
            display_name2: 'none',
            back_name:"#0d64cd",
            back_name1:"#fff",
            back_name2:"#fff",
            color_name:"#fff",
            color_name1:"#666666",
            color_name2:"#666666"
        })
    }
    chang1=()=>{
        this.setState({
            display_name1: 'block', //此状态机为display的取值
            display_name0: 'none',
            display_name2: 'none',
            back_name1:"#0d64cd",
            back_name:"#fff",
            back_name2:"#fff",
            color_name1:"#fff",
            color_name:"#666666",
            color_name2:"#666666"
        })
    }
    chang2=()=>{
        this.setState({
            display_name2: 'block', //此状态机为display的取值
            display_name1: 'none',
            display_name0: 'none',
            back_name2:"#0d64cd",
            back_name1:"#fff",
            back_name0:"#fff",
            color_name2:"#fff",
            color_name1:"#666666",
            color_name0:"#666666"
        })
    }
    chang01=()=>{
        this.setState({
            display_name01: 'block', //此状态机为display的取值
            display_name11: 'none',
            display_name21: 'none',
            back_name01:"#0d64cd",
            back_name11:"#fff",
            back_name21:"#fff",
            color_name01:"#fff",
            color_name11:"#666666",
            color_name21:"#666666"
        })
    }
    chang11=()=>{
        this.setState({
            display_name11: 'block', //此状态机为display的取值
            display_name01: 'none',
            display_name21: 'none',
            back_name11:"#0d64cd",
            back_name01:"#fff",
            back_name21:"#fff",
            color_name11:"#fff",
            color_name01:"#666666",
            color_name21:"#666666"
        })
    }
    chang21=()=>{
        this.setState({
            display_name21: 'block', //此状态机为display的取值
            display_name11: 'none',
            display_name01: 'none',
            back_name21:"#0d64cd",
            back_name11:"#fff",
            back_name01:"#fff",
            color_name21:"#fff",
            color_name11:"#666666",
            color_name01:"#666666"
        })
    }
    chang02=()=>{
        this.setState({
            display_name02: 'block', //此状态机为display的取值
            display_name12: 'none',
            display_name22: 'none',
            back_name02:"#0d64cd",
            back_name12:"#fff",
            back_name22:"#fff",
            color_name02:"#fff",
            color_name12:"#666666",
            color_name22:"#666666"
        })
    }
    chang12=()=>{
        this.setState({
            display_name12: 'block', //此状态机为display的取值
            display_name02: 'none',
            display_name22: 'none',
            back_name12:"#0d64cd",
            back_name02:"#fff",
            back_name22:"#fff",
            color_name12:"#fff",
            color_name02:"#666666",
            color_name22:"#666666"
        })
    }
    chang22=()=>{
        this.setState({
            display_name22: 'block', //此状态机为display的取值
            display_name12: 'none',
            display_name02: 'none',
            back_name22:"#0d64cd",
            back_name12:"#fff",
            back_name02:"#fff",
            color_name22:"#fff",
            color_name12:"#666666",
            color_name02:"#666666"
        })
    }
    chang03=()=>{
        this.setState({
            display_name03: 'block', //此状态机为display的取值
            display_name13: 'none',
            display_name23: 'none',
            back_name03:"#0d64cd",
            back_name13:"#fff",
            back_name23:"#fff",
            color_name03:"#fff",
            color_name13:"#666666",
            color_name23:"#666666"
        })
    }
    chang13=()=>{
        this.setState({
            display_name13: 'block', //此状态机为display的取值
            display_name03: 'none',
            display_name23: 'none',
            back_name13:"#0d64cd",
            back_name03:"#fff",
            back_name23:"#fff",
            color_name13:"#fff",
            color_name03:"#666666",
            color_name23:"#666666"
        })
    }
    chang23=()=>{
        this.setState({
            display_name23: 'block', //此状态机为display的取值
            display_name13: 'none',
            display_name03: 'none',
            back_name23:"#0d64cd",
            back_name13:"#fff",
            back_name03:"#fff",
            color_name23:"#fff",
            color_name13:"#666666",
            color_name03:"#666666"
        })
    }
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
                ><h3>分数线</h3></NavBar>
                <p style={{textAlign:"center",fontSize:"24px"}}>各省历年高考分数线</p>

                    <div style={{width:"90%",paddingTop:"0px",margin:"0 auto"}} id="bj">
                        <div style={{width:"100%",height:"300px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                北京
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name,color:this.state.color_name,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name1,color:this.state.color_name1,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang1}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name2,color:this.state.color_name2,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang2}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>480</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>423</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>559</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>527</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>335</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>295</td>    
                            </tr>
                           <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>576</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>532</td>    
                            </tr>
                            <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>488</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>432</td>    
                            </tr>
                            <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>340</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>300</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>555</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>537</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>468</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>439</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>150</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>150</td>    
                            </tr>
                        </div>   
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                天津
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name01,color:this.state.color_name01,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang01}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name11,color:this.state.color_name11,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang11}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name21,color:this.state.color_name21,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang21}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>428</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>400</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>500</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>551</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>299</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>288</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>531</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>521</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>401</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>395</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>280</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>276</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>532</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>512</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>460</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>424</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                河北
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name02,color:this.state.color_name02,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang02}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name12,color:this.state.color_name12,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang12}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name22,color:this.state.color_name22,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang22}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>549</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>502</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>462</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>379</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>220</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>559</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>511</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>441</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>358</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>517</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>485</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>395</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>326</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>  
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                山东
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name03,color:this.state.color_name03,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang03}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name13,color:this.state.color_name13,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang13}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name23,color:this.state.color_name23,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang23}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>503</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>443</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>542</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>514</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>326</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>287</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>530</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>537</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>474</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>451</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>308</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>293</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>532</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>512</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>460</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>424</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                浙江
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name,color:this.state.color_name,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name1,color:this.state.color_name1,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang1}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name2,color:this.state.color_name2,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang2}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>480</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>423</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>559</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>527</td>    
                            </tr>
                            <tr style={{display: this.state.display_name0}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>335</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>295</td>    
                            </tr>
                           <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>576</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>532</td>    
                            </tr>
                            <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>488</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>432</td>    
                            </tr>
                            <tr style={{display: this.state.display_name1}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>340</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>300</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>555</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>537</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>468</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>439</td>    
                            </tr>
                            <tr style={{display: this.state.display_name2}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>150</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>150</td>    
                            </tr>
                        </div>   
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                河南
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name01,color:this.state.color_name01,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang01}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name11,color:this.state.color_name11,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang11}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name21,color:this.state.color_name21,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang21}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>428</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>400</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>500</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>551</td>    
                            </tr>
                            <tr style={{display: this.state.display_name01}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>299</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>288</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>531</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>521</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>401</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>395</td>    
                            </tr>
                            <tr style={{display: this.state.display_name11}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>280</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>276</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>532</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>512</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>460</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>424</td>    
                            </tr>
                            <tr style={{display: this.state.display_name21}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                山西
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name02,color:this.state.color_name02,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang02}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name12,color:this.state.color_name12,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang12}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name22,color:this.state.color_name22,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang22}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>549</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>502</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>462</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>379</td>    
                            </tr>
                            <tr style={{display: this.state.display_name02}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>220</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>559</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>511</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>441</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>358</td>    
                            </tr>
                            <tr style={{display: this.state.display_name12}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>517</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>485</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>395</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>326</td>    
                            </tr>
                            <tr style={{display: this.state.display_name22}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>  
                        <div style={{width:"100%",height:"300px",marginTop:"40px",border:"1px solid green",backgroundColor:"#fbfcff"}}>
                            <div style={{fontWeight:"bolder",fontSize:"22px",margin:"0 auto",borderBottom:"1px solid red",width:"80%",marginTop:"5px",textAlign:"center",height:"30px"}}>
                                {/* {this.state.value} */}
                                江苏
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name03,color:this.state.color_name03,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang03}>
                                    2019
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name13,color:this.state.color_name13,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang13}>
                                    2018
                            </div>
                            <div style={{textAlign:"center",lineHeight:"30px",width:"20%",height:"30px",border:"1px solid #b1d0ed",backgroundColor:this.state.back_name23,color:this.state.color_name23,float:"left",marginTop:"15px",marginLeft:"10%"}} onClick={this.chang23}>
                                    2017
                            </div>
                            <tr>
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",marginLeft:"30px",width:'80px'}}>批次</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:'80px'}}>文科</td>   
                                <td style={{marginTop:"20px",border:"1px solid #b1d0ed",float:"left",marginLeft:"-1px",height:"35px",textAlign:"center",lineHeight:"35px",backgroundColor:"#f0f4ff",width:"80px"}}>理科</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>本科批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>503</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>443</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>自主招生</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>542</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>514</td>    
                            </tr>
                            <tr style={{display: this.state.display_name03}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>326</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>287</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>530</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>537</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>474</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>451</td>    
                            </tr>
                            <tr style={{display: this.state.display_name13}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>308</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>293</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>一批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>532</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>512</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>二批</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>460</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>424</td>    
                            </tr>
                            <tr style={{display: this.state.display_name23}}>
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",marginLeft:"30px",width:'80px'}}>艺术类</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:'80px'}}>200</td>   
                                <td style={{border:"1px solid #b1d0ed",float:"left",marginTop:"-1px",marginLeft:"-1px",  height:"30px",textAlign:"center",lineHeight:"30px",backgroundColor:"#fbfcff",width:"80px"}}>200</td>    
                            </tr>
                        </div>              
                    </div>
            </div>
        )
    }
}
