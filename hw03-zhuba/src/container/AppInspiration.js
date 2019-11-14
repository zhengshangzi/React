import React, { Component } from 'react'
import {NavBar,Carousel,Grid,WhiteSpace,Icon,Tabs,}from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '虎' },
];
const data = ['1','2','3','4','5','6'];
const name0=['0','橙色律动','儿童房','翻滚吧，地毯君','角落里的遐想','5','6']; 
export default class AppInspiration extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}
                        rightContent={[
                         <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}>灵感
                </NavBar>
                <Tabs tabs={tabs}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} tabBarActiveTextColor={'#3fcccb'} >
                </Tabs>
                <Grid data={data} itemStyle={{ height: '240px', background: '#eeeeee'}}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{ marginLeft: '12.5px' ,backgroundColor:'#fff',height:'230px',marginRight: '12.5px'}}>
                        <img src={'/images/linggan'+dataItem+'.jpg'} style={{ width: '100%', height: '75%' }} alt="" />
                        <img src={'/images/linggan'+dataItem+'.png'} style={{ width: '100%', height: '75%' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span style={{float:'left',}}> <img src={'/images/p'+dataItem+'.png'} style={{ width: '30px', height: '30px' }} alt="" /></span>
                            <span style={{float:'left',marginLeft:'15px',marginTop:'5px'}}>{name0[`${dataItem}`]}</span>
                            <span className='iconfont icon-xin' style={{float:'right',color:'red',marginTop:'5px'}}></span>
                        </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
