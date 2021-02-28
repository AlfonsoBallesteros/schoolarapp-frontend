import React from 'react'
import { Layout } from 'antd';
import { Footer } from '../components/shared/footer/Footer'
import { Navbar } from '../components/shared/navbar/Navbar'
import {  Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';

export const RouterPublic = () => {
    return (
        <>
            <Layout>
                <Layout style={{ height: "100vh" }}>
                    <Navbar />
                    <Layout.Content style={{ margin: '24px 16px 0' }} >
                        <div style={{ flex: "1 1 auto", padding: "40px", background: "#fff" }}>
                            <Switch>
                                <Route exact path="/home" component={HomeScreen}/>
                                <Redirect to="/home"/>
                            </Switch>
                        </div>
                    </Layout.Content>
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}
