import React, { Component } from 'react'
import '../all/allcontent.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Allcontent extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    //发请求
    componentDidMount(){
        let page=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            }) 
        })
    }
    //每次更新完毕后他会执行
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render() {
        let {url}=this.props.match;
        console.log(url)
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{background:'white',width:900,height:40,overflow:'hidden',marginTop: 10}}key={item.id}>
                            <div className="user_avatar">
                                <img src={item.author.avatar_url} alt="头像" title={item.author.loginname} />
                            </div>
                            <div>
                            {
                                item.reply_count !== undefined &&
                                <div className="reply_count pull-left">{ item.reply_count }/{ item.visit_count }</div>
                            }
                            </div>
                            <div>
                             <span className='put-top pull-left'>{ item.tab }</span>
                            </div>
                            {/* <a onClick={()=>this.props.history.push(`/more/${item.id}`)} to={`/more/${item.id}`} className='topic_title pull-left'>{ item.title }</a> */}
                            <Link to={`/more/${item.id}`} className='topic_title pull-left'>{ item.title }</Link>
                           
                            <div className="last_time pull-right">
                                <time>{item.last_reply_at}</time>+

                            </div>
                            <div className="user_avatar1">
                                <img src={item.author.avatar_url} alt="头像" title={item.author.loginname} />
                            </div>
                           
                        </div>
                    ))
                }
            </div>
        )
    }
}

