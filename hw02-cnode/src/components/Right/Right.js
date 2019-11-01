import React, { Component } from 'react'
import './Right.css'
export default class Right extends Component {
    render() {
        return (
            <div className="right">
                <div className='panel'>
                    <div class="inner">
                        <p>CNode：Node.js专业中文社区</p>
                        <div>
                        您可以 登录 注册,也可以
                        <div className='span-info'>
                        通过 GitHub 登录
                        </div>

                        </div>
                    </div>
                </div>
                <div className='panel'>
                    <div class="inner">
                        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                        <div class="sep10"></div>
                        <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'/>
                        <div class="sep10"></div>
                        <img src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_'/>
                    </div>
                </div>
                <div className='panel'>
                    <div class='header'>
                        <div className='col-fade'>无人回复的话题</div>
                    </div>
                    <div class="inner">
                       <ul class='unstyled'>
                           <div>你们有没有遇到过 yarn integrity check failure 的问题？
                               </div>
                           <div>这个课程怎么样，最近想学JS的人工智能开发
                               </div>
                        <div>基于 Custom Elements 的组件化开发
                               </div>
                          <div>node.js项目实战：dapps应用商店
                               </div>
                           <div>Object.defineProperty()修改对象属性的get、set方法后，对象为空，对象属性有值
                               </div>
                       </ul>
                    </div>
                </div>
                <div className='panel'>
                    <div class='header'>
                        <div className='col-fade'>积分榜&nbsp;&nbsp;&nbsp;TOP 100>></div>
                    </div>
                    <div class="inner">
                       <ol>
                               <div>
                               <span class="top_score">21730</span>
                               <span class="user_name">i5ting</span>
                               </div>
                           <div>
                               <span class="top_score">15660</span>
                               <span class="user_name">alsotang</span>
                               </div>
                           <div>
                               <span class="top_score">9350</span>
                               <span class="user_name">leapon</span>
                               </div>
                               <div>
                               <span class="top_score">9035</span>
                               <span class="user_name">atian25</span>
                               </div>
                           <div>
                               <span class="top_score">8780</span>
                               <span class="user_name">jiyinyiyong</span>
                               </div>
                               <div>
                               <span class="top_score">7310</span>
                               <span class="user_name">yakczh</span>
                               </div>
                           <div>
                               <span class="top_score">6815</span>
                               <span class="user_name">im-here</span>
                               </div>
                           <div>
                               <span class="top_score">6095</span>
                               <span class="user_name">DevinXian</span>
                               </div>
                           <div>
                               <span class="top_score">5815</span>
                               <span class="user_name">chapgaga</span>
                               </div>
                           <div>
                               <span class="top_score">5350</span>
                               <span class="user_name">magicdawn</span>
                               </div>
                           
                       </ol>
                    </div>
                </div>
                <div className='panel'>
                    <div class='header'>
                        <div className='col-fade'>友情社区</div>
                    </div>
                    <div class="inner">
                       <ol class="friendship-community">
                           <li >
                               <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                           </li>
                           <div class="sep10"></div>
                           <li >
                               <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                           </li>
                           <div class="sep10"></div>
                           <li >
                               <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                           </li>
                           <div class="sep10"></div>
                           <li >
                               <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                           </li>

                       </ol>
                    </div>
                </div>
                <div className='panel'>
                    <div class='header'>
                        <div className='col-fade'>客户端二维码</div>
                    </div>
                    <div class="inner">
                        <div className="inner cnode-app-download">
                        <img width="200" src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                        <div className='git'>客户端源码地址</div>
                        </div>

                    </div>
                </div>
            </div>
                
        )
    }
}
