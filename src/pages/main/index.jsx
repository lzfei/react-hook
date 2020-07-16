import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import router from '../../router/router'
import './index.less'

import { Route, Switch } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Main (props) {
  const [collapsed, setCollapsed] = useState(false);
  const onSelect = (event) => {
    const {key} = event
    props.history.push(key)
  };
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" onSelect={onSelect} defaultOpenKeys= {['/' + props.location.pathname.split('/')[1]]} defaultSelectedKeys={[props.location.pathname]}>
          {
            router.map(route => (
              !route.hideInMenu && route.children !== undefined ? 
              (
                <SubMenu key={route.path} icon={<route.icon />} title={route.name}>
                  {
                    route.children.map(child => !child.hideInMenu && <Menu.Item key={child.path}>{child.name}</Menu.Item>)
                  }
                </SubMenu>
              )
              : <Menu.Item key={route.path} icon={<route.icon />}>{route.name}</Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          { 
            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            {
              router.map((route, index) => 
                route.children ? route.children.map((child, cindex) => <Route exact key={cindex} path={child.path} component={ child.component }/>)
                : <Route exact key={index} path={route.path} component={ route.component }/>
              )
            }
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
export default Main