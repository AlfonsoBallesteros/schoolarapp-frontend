import React from 'react'
import { Layout  } from 'antd';

export const Footer = () => {
    let date = new Date();
    let ano = date.getFullYear()
    return (
        <Layout.Footer style={{ textAlign: 'center' }}>
            Design ©{ano} Created by Ing of Softwore USCO.
        </Layout.Footer>
    )
}
