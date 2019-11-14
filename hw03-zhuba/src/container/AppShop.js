import React, { Component } from 'react'
import {NavBar,Carousel,Grid,SearchBar,Icon}from 'antd-mobile';
const name0=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类']
const data = [
    { 
        icon:'iconfont icon-zhuozi',
        text:'桌',
        color:'#fd3f7a'
    },
    { 
        icon:'iconfont icon-chuang',
        text:'床',
        color:'#2fc3fd'
    },
    { 
        icon:'iconfont icon-yizi',
        text:'椅',
        color:'#fda430'
    },
    { 
        icon:'iconfont icon-chaji',
        text:'几',
        color:'#39d2d1'
    },
    { 
        icon:'iconfont icon-guizi',
        text:'柜',
        color:'#fe4341'
    },
    { 
        icon:'iconfont icon-shujia',
        text:'书架',
        color:'#3b3bf6'
    },
    { 
        icon:'iconfont icon-shafa',
        text:'沙发',
        color:'#a90eff'
    },
    { 
        icon:'iconfont icon-shanzi',
        text:'家居饰品',
        color:'#28e079'
    },
    { 
        icon:'iconfont icon-Parachute',
        text:'户外家具',
        color:'#8c84c1'
    },
    { 
        icon:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',
        text:'全部分类',
        color:'#7b7980'
    }
];
const data2=["0","1"];
const data3=["3",]
const name1=['Top Art Studio 欧式风格精细...','顺顺工艺欧式风格塑料外框黑...'];
const name2=["￥39.95","￥83.99"]
export default class AppShop extends Component {
    state = {
        value: '美食',
      };
  
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}
                 rightContent={
                    <i style={{fontSize:22,lineHeight:'22px',marginRight: '16px'}} className='iconfont icon-qicheqianlian-'></i>
                        }
                >商城</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                     
                    {['1','2','3','4'].map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={'/images/store'+'.png'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            这是第{val}张轮播图片
                        </a>
                    ))}

                </Carousel>
                <div style={{position:'absolute',top:'5%',width:'100%',backgroundColor:'#000',opacity:'0.7',height:'5%',color:'#fff'}}>
                <div className='iconfont icon-oacute' style={{marginTop:'2.5%',float:'left',marginLeft:'3%',width:'6%',height:'70%'}}></div>
                    <SearchBar placeholder="输入关键字搜索" style={{width:'83%',height:'70%',border:'none',background:'white',opacity:'0.9',marginTop:'1.5%',marginRight:'5%',float:'right',borderRadius:'6px'}}/>
                </div>
                <Grid data={data} hasLine={false} columnNum={5} 
                 renderItem={dataItem => (
                    <div style={{backgroundColor:"white",width:'100%',height:'100%'}}>
                        <div style={{backgroundColor:dataItem.color,width:'50%',height:'80%',borderRadius:'50%',margin:"0 auto",color:'#fff'}}>
                            <div className={dataItem.icon} style={{position:'absolute',top:'34%',left:'40%'}}></div>
                        </div>
                        <div style={{color:'#2f2f2f',fontSize:'12px'}}>
                            {dataItem.text}
                        </div>
                    </div>
                )} 
                />
                <Grid data={data2} columnNum={2} itemStyle={{ height: '200px', background: 'rgba(0,0,0,.05)' }} renderItem={dataItem => (
                    <div style={{ paddingLeft: '12.5px',paddingRight:'12.5px'}}>
                        <img src={'/images/store'+dataItem+'.png'} style={{ width: '100%', height: '80%', }} alt="" />
                        <div style={{ color: '#888', fontSize: '11.9px', marginTop: '12px',}}>
                            <div style={{textAlign:'left'}}>{name1[`${dataItem}`]}</div>
                        </div>
                        <div style={{textAlign:'left',marginTop: '10px',fontSize: '11.5px'}}>{name2[`${dataItem}`]}</div>
                    </div>
                )} />
                 <Grid data={data3} columnNum={1} itemStyle={{ height: '220px', background: 'white' }} renderItem={dataItem => (
                    <div style={{  paddingLeft: '12.5px',paddingRight:'12.5px'}}>
                        <img src={'/images/store'+dataItem+'.png'} style={{ width: '100%', height: '100%' }} alt="" />
                    </div>
                )} />
            </div>
        )
    }
}
