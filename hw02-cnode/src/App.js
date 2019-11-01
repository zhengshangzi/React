    import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Api from './container/api/Api'
import Start from './container/start/Start'
import About from './container/about/About'
import Home from './container/home/Home'
import Register from './container/register/Register'
import Login from './container/login/Login'
import Right from './components/Right/Right'
import More from './container/More/More'

export default class App extends Component {
    
    render() {
        return (
            <Router>
                <div >
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Switch>
                        <Route path='/home' component={Home}></Route> 
                        <Route path='/start' component={Start}></Route>
                        <Route path='/api' component={Api}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/more/:id' component={More} />
                        <Route path='/'exact  render={()=><Redirect from='/' to='/home/all/1'/>}/>
                        </Switch>
                    </div>
                    <div>
                        <Right/>
                    </div>
                </div>
                <div>
                  <Footer/>
                </div>
            </Router>
        )
    }
}