import React, { Component } from 'react'
import {NavBar,Carousel,Grid,WhiteSpace }from 'antd-mobile';
const data2 = ['3','4','5'];
const data3=['6'];
export default class AppHome extends Component {
    render() {
        return (
            <div>
               <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}>住吧家居</NavBar>
               <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {['1','2'].map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '200px' }}
                        >
                            <img
                                src={'./images/home'+val+'.png'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={data2} columnNum={3} itemStyle={{ height: '140px', background: '#eeeeee',}} renderItem={dataItem => (
                        <div style={{ paddingLeft: '12.5px',paddingRight:'12.5px'}}>
                            {/* <img src={'/images/home'+dataItem+'.jpg'} style={{ width: '110px', height: '110px' }} alt="" /> */}
                            <img src={'./images/home'+dataItem+'.png'} style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                )} />
                <div className="sub-title" style={{paddingTop:'15px',paddingBottom:'15px',backgroundColor:'#ffffff',fontSize:'18px'}}>
                    <span style={{width:'3px',backgroundColor:'#3fcccb',color:'#3fcccb',marginRight:'10px'}}>
                        |
                    </span>热门推荐
                </div>
                <Grid data={data3} columnNum={1} itemStyle={{ height: '210px', background: '#eeeeee',padding:'0'}} renderItem={dataItem => (
                        <div style={{padding:0}}>
                            <img src={'./images/home'+dataItem+'.png'} style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                )} />
            </div>
        )
    }
}
