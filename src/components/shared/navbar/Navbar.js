import React from 'react'
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

export const Navbar = () => {
    const { Header } = Layout;
    return (

        <Header style={{ padding: 0 }}>

            <Menu mode="horizontal">
                <Menu.Item key="1">
                    nav 1
                </Menu.Item>
                <Menu.Item key="2">
                    nav 1
                </Menu.Item>
                <Menu.Item key="3">
                    nav 1
                </Menu.Item>
                <Menu.Item key="4">
                    nav 1
                </Menu.Item>
                <Menu.Item key="5">
                    nav 1
                </Menu.Item>
                <Menu.Item key="6">
                    nav 1
                </Menu.Item>
            </Menu>
        </Header>

    )
}
