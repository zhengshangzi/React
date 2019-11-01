import React, { Component } from 'react'
import './login.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    主页/登录
                </div>
                <div className='login-content'>
                    <div className='login-content1'>
                        <div className='control-label'>
                            用户名&nbsp;:&nbsp;
                        </div>
                        <input type='text' className='t1'/>
                    </div>
                    <div className='login-content2'>
                        <div className='control-label'>
                            密码&nbsp;:&nbsp;
                        </div>
                        <input type='password' className='t1'/> 
                    </div>
                    <div className='login-content3'>
                        <Link to='/home/all/1'><button className='btn'>登录</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
