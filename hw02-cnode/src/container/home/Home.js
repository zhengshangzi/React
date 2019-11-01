import React, { Component } from 'react'
import {Link,Route,Switch,NavLink} from 'react-router-dom'
import All from '../all/All'
import Essence from '../essence/Essence'
import Share from '../share/Share'
import Question from '../question/Question'
import Invite from '../invite/Invite'
import Clienttest from '../clienttest/Clienttest'
import '../home/Home.css'
export default class Home extends Component {
    render() {
        let {url}=this.props.match;
        return (
            <div className="panel">
                <div className="header">
                    <NavLink to={`${url}/all/1` } className="topic-tab" activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}} >全部</NavLink>
                    <NavLink to={`${url}/essence/1` }className="topic-tab " activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}}>精华</NavLink>
                    <NavLink to={`${url}/share/1`}className="topic-tab "activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}}>分享</NavLink>
                    <NavLink to={`${url}/question/1`}className="topic-tab "activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}}>问答</NavLink>
                    <NavLink to={`${url}/invite/1`}className="topic-tab "activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}}>招聘</NavLink>
                    <NavLink to={`${url}/clienttest/1`}className="topic-tab "activeStyle={{background:'#80bd01',color:'white',borderRadius:3,padding:4}}>客户端测试</NavLink>
                </div>
                <div>
                    <Route path={url+'/all'}  component={All}/>
                    <Route path={`${url}/essence`} component={Essence}/>
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={url+'/question'} component={Question}/>
                    <Route path={`${url}/invite`} component={Invite}/>
                    <Route path={`${url}/clienttest`} component={Clienttest}/>

                </div>
            </div>
        )
    }
}
