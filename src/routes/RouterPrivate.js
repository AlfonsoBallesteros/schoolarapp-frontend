import React from 'react'
import { Layout } from 'antd';
import { Navbar } from '../components/shared/navbar/Navbar'
import { Sidebar } from '../components/shared/siderbar/Sidebar'
import { Footer } from '../components/shared/footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MatriculaNuevo } from '../components/matricula/MatriculaNuevo';

export const RouterPrivate = () => {
    return (
        <>
            <Layout>
                <Sidebar/>
                <Layout style={{ height: "100vh" }}>
                    <Navbar />
                    <Layout.Content style={{ margin: '24px 16px 0' }} >
                        <div style={{ flex: "1 1 auto", padding: "40px", background: "#fff" }}>
                            <Switch>
                                <Route exact path="/matricula/nuevo" component={MatriculaNuevo}/>
                                <Redirect to="/matricula/nuevo"/>
                            </Switch>
                        </div>
                    </Layout.Content>
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}
