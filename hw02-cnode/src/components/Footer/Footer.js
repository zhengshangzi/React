import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div class="links">
                        <br/>
                        <a class="dark" href="/rss">RSS |</a>
                        
                        <a class="dark" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                    </div>
                    <div class="col_fade">
                        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                        <p>服务器赞助商为
                            <img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px"/>
                        ，存储赞助商为
                            <img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px"/>
                        ，由
                            <img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width="166px"/>
                        提供应用性能服务。
                        </p>
                        <br/>
                        <p >新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                    </div>
                </footer>
            </div>
        )
    }
}
