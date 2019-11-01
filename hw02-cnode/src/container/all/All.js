import React, { Component } from 'react'
import Allcontent from './Allcontent'
import './allcontent.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
export default class All extends Component {
    render() {
        return (
            <div>
                <Route path='/home/all/:id' component={Allcontent}></Route>
                {
                    <div class='pagination'>
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                    <li key={item}>
                                        <NavLink activeStyle={{background:'#80bd01',color:'white'}} to={'/home/all/'+item}>{item}页</NavLink>
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

