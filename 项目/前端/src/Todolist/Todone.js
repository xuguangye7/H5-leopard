import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todone extends Component {
    render(){
        return(        
            <ul style={{}}>
                <p style={{fontFamily:'Kaiti',fontWeight:"bolder"}}>完成的任务</p>
                {
                    // 在map内部用到this要注意指向，所以使用箭头函数
                    this.props.todo.map((value, key) => {
                        if(value.checked){
                            return(
                                <li style={{width:'80%',marginTop:'10px',height:'30px',fontFamily:'Kaiti',lineHeight:'30px',borderBottom:'1px solid #099ff5'}} key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={()=>this.props.a(key)} style={{width:'16px',height:'16px'}}/>
                                    <span style={{fontSize:'14px',marginLeft:'10px'}}>{value.todo}</span>
                                    <button style={{marginLeft:5,fontSize:'13px',marginTop:'5px',border:'1px solid #099ff5',float:'right',backgroundColor:'white',borderRadius:'5px'}} onClick={()=>{this.props.delTodo(key)}}>删除</button>
                                </li>
                            )
                        }
                        return ''
                    })
                }
            </ul>
        )
    }
}