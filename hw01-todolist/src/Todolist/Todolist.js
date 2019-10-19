import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import Todofinished from './Todofinished'
import './todo.css';
export default class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }
    addData = (data) => {
          let title = data;
          let tempList = this.state.list;
          tempList.push({
            title: title,
            checked: false
          })
          this.setState({
            list: tempList
          })
          localStorage.setItem('todoList', JSON.stringify(tempList))
    }
    delData = (key) => {
        var temList = this.state.list
        temList.splice(key, 1)
        this.setState({
          list: temList
        })
        localStorage.setItem('todoList', JSON.stringify(temList))
    }
    checkData = (key) => {
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
          list: tempList
        })
        localStorage.setItem('todoList', JSON.stringify(tempList))
    }
    componentDidMount () {
        var todoList = JSON.parse(localStorage.getItem('todoList'))
        if (todoList) {
          this.setState({
            list: todoList
          })
        }
      }
    render() {
        return (
          <div className="Todolist">
              <Todoinput add={this.addData}/>
              <Todoing del={this.delData} check={this.checkData} list={this.state.list}/>
              <Todofinished del={this.delData} check={this.checkData} list={this.state.list}/>
          </div>
        )
    }
}
