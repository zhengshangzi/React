import React, { Component } from 'react'
import QuestionContent from './QuestionContent'
import './questioncontent.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
export default class Question extends Component {
    render() {
        return (
            <div>
                <Route path='/home/question/:id' component={QuestionContent}></Route>
                {
                    <div class='pagination'>
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                    <li key={item}>
                                        <NavLink activeStyle={{background:'#80bd01',color:'white'}} to={'/home/question/'+item}>{item}页</NavLink>
                                    </li>
                                ))
                            }
                           
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
