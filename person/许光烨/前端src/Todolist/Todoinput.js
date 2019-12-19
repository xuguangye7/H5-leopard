import React, { Component } from 'react'

export default class Todoinput extends Component {
    render(){
        return(
            <div className="row1">
                <input style={{marginLeft:35,borderRadius:'5px',border:'1px solid #099ff5',height:'30px',width:'225px'}} ref="title" onKeyUp={this.props.addTodo.bind(this)}/>
            </div>
        )
    }
}