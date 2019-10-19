import React, { Component } from 'react'
import './todo.css';
export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value='';
        }
    }
    render() {
        return (
            <div className="Todoinput">
                <div className='Todoinput-content'>
                    <h1 className="Todoinput-title">Todolist </h1>
                    <input onKeyDown={this.handleInput} type="text" placeholder="添加ToDo" className='Todoinput-input'/>
                </div>
            </div>
        )
    }
}
