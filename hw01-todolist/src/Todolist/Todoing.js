import React, { Component } from 'react';
import './todo.css';
var i=0;
export default class Todoing extends Component {
    render () {
      i=0;
      return (
        <div className="Todoing-content">
          <h2 className='Todoing-title'>正在进行</h2>
          <ul>{this.props.list.map((value, key) => {
              if (!value.checked) {
                i++;
                  return (<li key={key}><input type='checkbox' checked={value.checked} onChange={this.props.check.bind(this, key)} />{value.title}<button onClick={this.props.del.bind(this, key)}>删除</button></li>) 
                } 
              })}  
          </ul>
          <h3>共{i}项</h3> 
        </div>
      )
    } 
}



