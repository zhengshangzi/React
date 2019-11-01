import React, { Component } from 'react'
import './more.css'
import { isTemplateElement } from '@babel/types';
export default class More extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    //发请求
    componentDidMount(){
        let id=this.props.match.params.id;
        console.log('这次的ID是'+id)
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    //每次更新完毕后他会执行
    componentDidUpdate(prevProps,prevState){
        //要不要更新加一个判断
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
                
            })
            
        }
        console.log(this.state.data)
    }
    render() {
        let id=this.props.match.params.id;
        return (
            <div className='more'>
                <div className='more-title'>
                    <div className='title1'>
                    <div className='put-top'>
                        { this.state.data.tab }
                    </div>
                    <div className='put-title'>{ this.state.data.title }</div>
                    </div>
                    <div className='title2'>
                    <div className='put-time'>
                        发布于{this.state.data.create_at}
                    </div>
                    <div className='put-id'>
                    作者{this.state.data.author_id}
                    </div>
                    <div className='put-views'>
                        { this.state.data.visit_count }次浏览
                    </div>
                    <div className='put-tab1'> 来自 { this.state.data.tab }</div>
                    </div>
                </div>
                <div className='more-line'>
                </div>
                {
                 <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                }
                
                <div className='more-line1'></div>
                <div className='login-header'>
                    {this.state.data.reply_count}&nbsp;回复
                </div>
            </div>
        )
    }
}
