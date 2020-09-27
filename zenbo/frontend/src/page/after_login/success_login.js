import React from 'react'
import { Layout, } from 'antd';
import 'antd/dist/antd.css';
import Search from 'antd/lib/input/Search';
import { Route, useHistory } from 'react-router-dom';
import { FlexHorizon } from '../../component/FlexHorizon';
import { SearchOutlined } from '@ant-design/icons';


export const SuccessLogin = () => {
    let his = useHistory()
    const jump = (e) => { his.push(e.key) }
    return (
        <Layout className="layout theme-light flex-vertical">
            <SearchOutlined style={{ marginTop: '18px', width: '5%' }} onClick={() => { his.push("/") }} />
        </Layout>
    )
}
