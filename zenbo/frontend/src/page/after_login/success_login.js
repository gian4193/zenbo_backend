import React, { useState, useEffect, useReducer } from 'react'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Search from 'antd/lib/input/Search';
import { Route, useHistory } from 'react-router-dom';
import { FlexHorizon } from '../../component/FlexHorizon';
import { SearchOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


export const SuccessLogin = () => {
    let his = useHistory()
    const jump = (e) => { his.push(e.key) }
    return (
        <Layout className="layout theme-light flex-vertical">
            <FlexHorizon>
                <SearchOutlined style={{ marginTop: '18px', width: '5%' }} onClick={() => { his.push("/") }} />
                <Menu className='menu' mode='horizontal'>
                    <Menu.Item key='/success_login/temperature' onClick={jump}>體溫紀錄</Menu.Item>
                    <Menu.Item key='/success_login/bloodpressure' onClick={jump}>血壓紀錄</Menu.Item>
                    <Menu.Item key='/success_login/emergency' onClick={jump}>緊急通知</Menu.Item>
                </Menu>
            </FlexHorizon>
            <Route exact path="/success_login/temperature" component={Temperature} />
            <Route exact path="/success_login/emergency" component={Emergency} />
            <Route exact path="/success_login/bloodpressure" component={Bloodpressure}></Route>
        </Layout>
    )
}

const Temperature = () => {

    const [data, setData] = useState([])

    const get_temperature_data = async (patient) => {
        let d = (await Axios.get('/backend/get_patient_temperature/?patient=' + patient)).data
        console.log(d)
        setData(d)
    }

    const CustomizedAxisTick = (prop) => {
        const { x, y, stroke, payload } = prop;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    };


    return (
        <div >
            <br /><br />
            <Search style={{ width: "80%", marginLeft: "50px" }} placeholder="input patient_id" onSearch={value => { get_temperature_data(value) }} enterButton />
            <br />
            <LineChart width={1250} height={600} data={data}
                margin={{ top: 80, right: 50, left: 60, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={CustomizedAxisTick} height={100} />
                <YAxis type="number" domain={[35, 38.5]} ticks={[35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" />
            </LineChart>
        </div>

    )

}
// const IChart = (props) => {
//     const chart = new Chart({
//         container: 'c1',
//         autoFit: true,
//         height: 500,
//     });
//     chart.data(props.data);
//     chart.scale({
//         date: {
//             range: [0, 1],
//         },
//         temperature: {
//             min: 35,
//             nice: true,
//         },
//     });

//     chart.tooltip({
//         showCrosshairs: true, // 展示 Tooltip 辅助线
//         shared: true,
//     });

//     chart.line().position('date*temperature').label('temperature');
//     chart.point().position('date*temperature');
//     chart.render();

// }

const Emergency = () => {
    return (
        <p>enter Emergency</p>

    )

}

const Bloodpressure = () => {
    return (
        <p>enter Bloodpressuren</p>

    )

}
