import React, { Component } from 'react'
import EssenceContent from './EssenceContent'
import './essencecontent.css'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
export default class Essence extends Component {
    render() {
        return (
            <div>
                <Route path='/home/essence/:id' component={EssenceContent}></Route>
                {
                    <div class='pagination'>
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                    <li key={item}>
                                        <NavLink activeStyle={{background:'#80bd01',color:'white'}} to={'/home/essence/'+item}>{item}页</NavLink>
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
