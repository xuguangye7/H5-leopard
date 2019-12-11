import React, { Component } from 'react'
export default class Detail extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            detail:[]   
        }   
    }
    componentDidMount(){
        fetch()
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({detail:res.data});
            })
    }
    render() {    
        return (
            <div> 
               {
                   <div style={{width:'1100px'}} dangerouslySetInnerHTML={{__html: this.state.detail.content}}/>
               }
            </div>
        )
    }
}
