import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Button, Space, Row } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { paths } from '../constants';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doLogout } from '../redux/slices/authSlice';


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Phòng đọc", paths.room_reading, <DesktopOutlined />),
  getItem("Người dùng", paths.user, <UserOutlined />),
];


const Sider = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const [selectedKeys, setSelectedKeys] = useState([]);
  const isLoginPage = pathname === paths.login;
  React.useEffect(() => {
    if (!!pathname) {
      if (
        pathname.includes(paths.room_reading) ||
        pathname.includes(paths.room_reading + "/")
      ) {
        setSelectedKeys([paths.room_reading]);
      } else {
        setSelectedKeys([pathname]);
      }
    }
  }, [pathname]);

  const handleSelect = ({ item, key, keyPath, selectedKeys, label }) => {
    console.log( key)
    setSelectedKeys([key]);
    history.push(key);
  };

  if (isLoginPage) return <></>;

  return (
    <Layout.Sider
    style={{
      height: "100vh",
      position: "sticky",
      top: 0,
      overflow: "auto",
    }}
    collapsed={true}
  >
    <Row
      align="middle"
      justify="center"
      style={{ color: "white", fontSize: 20, height: 65 }}
    >
      LOGO
    </Row>

    <Menu
      theme="dark"
      selectedKeys={selectedKeys}
      mode="inline"
      items={items}
      onSelect={(data) => {
        console.log(data)
        handleSelect(data)
      }}
    />

    <Space
      direction="vertical"
      style={{ position: "absolute", bottom: 15, left: 25 }}
    >
      <Button
        type="primary"
        danger
        icon={<LogoutOutlined />}
        onClick={() => {dispatch(doLogout())}}
      ></Button>
    </Space>
  </Layout.Sider>
  );
};

export default Sider;

