import React from 'react';
import { TabBar} from 'antd-mobile';
import AppHome from './AppHome'
import AppShop from './AppShop'
import AppInspiration from './AppInspiration'
import AppMy from './AppMy'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            title="灵感"
            key="inspiration"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-linggan'></i>
            }
            selected={this.state.selectedTab === 'inspiration'}
            onPress={() => {
              this.setState({
                selectedTab: 'inspiration',
              });
            }}
          >
            <AppInspiration/>
          </TabBar.Item>
          <TabBar.Item
            title="商城"
            key="shop"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-store_icon'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-store_icon'></i>
            }
            selected={this.state.selectedTab === 'shop'}
            onPress={() => {
              this.setState({
                selectedTab: 'shop',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="my"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}