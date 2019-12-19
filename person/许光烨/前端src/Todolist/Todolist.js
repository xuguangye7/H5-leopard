import React, { Component } from 'react'
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import Todone from './Todone';

export default class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo:JSON.parse(localStorage.getItem('todolist'))||[],
            a:0,
            b:0
        }

    }
    addItem = (msg)=>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo)
        var obj={
            todo:msg,
            checked:false
        }
        const todo = [...this.state.todo,obj]
        this.setState({
            todo:todo
            
        },()=>{
            this.set()
        })
        localStorage.setItem('todolist', JSON.stringify(todo))
        // this.set();
        console.log(obj);
    }
    //一按回车键盘就增加
    addDataByEnter = e => {
        if (e.keyCode === 13) {
            this.addItem(e.target.value)
            
        }  
        
    }
    delItem = (a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo:todo},()=>{
                this.set();
            }
        )
        
        localStorage.setItem('todolist', JSON.stringify(todo))
    }
    changeChecked = index =>{
        const todo = [...this.state.todo]
        todo[index].checked=!todo[index].checked
        this.setState({
            todo:todo
        },()=>{
            this.set();
        })
        localStorage.setItem('todolist', JSON.stringify(todo))
    }
    set=()=>{
        var a = 0;
        var b = 0;
        for(var i=0;i<this.state.todo.length;i++){
            if(!this.state.todo[i].checked){
                a++;
            }
            else{
                b++;
            }
        }
        this.setState({
            a:a,
            b:b
        })
    }
    //存储函数
    componentDidMount() {
        // 获取数据，字符串转为JSON
        const list = JSON.parse(localStorage.getItem('todolist'))
        if (list) {
            this.setState({
                list:list
            })
        }
        this.set();
    }
    render() {
        return (
            <div className="todolist">
                <Todoinput addTodo={this.addDataByEnter}/>              
                <Todoing delTodo={this.delItem} todo={this.state.todo} a={this.changeChecked} b={this.state.a}/>
                <Todone delTodo={this.delItem} todo={this.state.todo} a={this.changeChecked} c={this.state.b}/>
            </div>
        )
    }
}

