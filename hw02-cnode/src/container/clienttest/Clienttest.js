import React, { Component } from 'react'
import ClienttestContent from './ClienttestContent'
import './clienttestcontent.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
export default class Clienttest extends Component {
    render() {
        return (
            <div>
                <Route path='/home/clienttest/:id' component={ClienttestContent}></Route>
                {
                    <div class='pagination'>
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                    <li key={item}>
                                        <NavLink activeStyle={{background:'#80bd01',color:'white'}} to={'/home/clienttest/'+item}>{item}页</NavLink>
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
