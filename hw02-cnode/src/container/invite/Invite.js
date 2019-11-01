import React, { Component } from 'react'
import InviteContent from './InviteContent'
import './invitecontent.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
export default class Invite extends Component {
    render() {
        return (
            <div>
                <Route path='/home/invite/:id' component={InviteContent}></Route>
                {
                    <div class='pagination'>
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                    <li key={item}>
                                        <NavLink activeStyle={{background:'#80bd01',color:'white'}} to={'/home/invite/'+item}>{item}页</NavLink>
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
