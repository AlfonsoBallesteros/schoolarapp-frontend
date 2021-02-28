import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';




export const Sidebar = () => {

    const { Sider } = Layout;
    

    return (

        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            
            style={{ height:"100vh",backgroundColor: "white" }}
        >
            <div style={{textAlign:"center", margin: 20}}>
                <img style={{height: "35px"}} src="../assets/logo.png" alt="logo"/>
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                 </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    nav 4
                </Menu.Item>
            </Menu>
        </Sider>

    )
}
