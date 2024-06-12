import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Button, Flex, Layout, Menu, theme } from "antd";

import Igenuie from "../";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Flex vertical gap={22}>
          <div
            className="demo-logo-vertical"
            style={{
              background: "grey",
              width: "100%",
              height: "75px",
              alignItems: "center",
            }}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Exams",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Notice Board",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Settings",
              },
              {
                key: "4",
                icon: <LogoutOutlined />,
                label: "Logout",
              },
            ]}
          />
        </Flex>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex style={{ justifyContent: "space-between" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <img src={Igenuie} style={{ height: "64px", width: "100px" }} />
            <Button
              type="text"
              icon={
                collapsed ? <FullscreenExitOutlined /> : <FullscreenOutlined />
              }
              onClick={handleToggle}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Flex>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};

export default Home;