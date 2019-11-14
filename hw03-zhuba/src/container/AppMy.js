import React, { Component } from 'react'
import {NavBar,Carousel,Grid,WhiteSpace,Icon }from 'antd-mobile';

export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}
                 rightContent={
                    <i style={{fontSize:22,lineHeight:'22px',marginRight: '16px'}} className='iconfont icon-shezhi1'></i>
                        }
                >我的</NavBar>
            </div>
        )
    }
}
