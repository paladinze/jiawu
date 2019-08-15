import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

class sample extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="people">
              <Icon type="user" />
              <span>人物</span>
            </Menu.Item>
            <Menu.Item key="ship">
              <Icon type="radar-chart" />
              <span>战舰</span>
            </Menu.Item>
            <Menu.Item key="movie">
              <Icon type="video-camera" />
              <span>影视</span>
            </Menu.Item>
            <Menu.Item key="doc">
              <Icon type="profile" />
              <span>文献</span>
            </Menu.Item>
            <Menu.Item key="others">
              <Icon type="file" />
              <span>其它</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            甲午档案
          </Header>
          <Content style={{ margin: "20px 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              甲午战争的历史
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            甲午档案 ©2019 Created by paladinze
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default sample;
