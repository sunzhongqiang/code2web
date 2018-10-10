import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu,Icon } from 'antd';
import './App.css';
import Project from './component/Project';
import Template from './component/Template';
import Log from './component/Log';

const { Header, Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  render() {
    return (
      <Router className="App">
          <Layout>
              <Header className="title">
                  <div className="logo">代码助理</div>
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{ lineHeight: '9vh',width: '300px' }}
                  >
                      <Menu.Item key="1"> <Link to="/">项目列表</Link></Menu.Item>
                      <Menu.Item key="2"><Link to="/template">模板列表</Link></Menu.Item>
                      <Menu.Item key="3"><Link to="/log">生成日志</Link></Menu.Item>
                  </Menu>
              </Header>
              <Content className="content">
                  <Route exact path="/" component={Project} />
                  <Route path="/template" component={Template} />
                  <Route path="/log" component={Log} />
              </Content>
          </Layout>
      </Router>
    );
  }
}

export default App;
