import React from 'react';
import { Line, LineChart,XAxis,YAxis,CartesianGrid,Tooltip } from 'recharts';
const data = [
    {name: 'Page A', uv: 12400, pv: 2400, amt: 24400},
    {name: 'Page B', uv: 52400, pv: 400, amt: 2400},
    {name: 'Page C', uv: 400, pv: 27400, amt: 278400},
    {name: 'Page D', uv: 2400, pv: 6400, amt: 2400},
    {name: 'Page E', uv: 400, pv: 7400, amt: 200},
];

const MyLineChart = () => {
    return (
        <LineChart width={800} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
            <XAxis dataKey="name" />
            <YAxis dataKey="uv" />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;