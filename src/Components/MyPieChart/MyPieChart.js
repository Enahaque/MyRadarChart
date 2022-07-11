import React from 'react';
import { PieChart,Pie } from 'recharts';

const MyPieChart = () => {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
      const data03 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 456
        },
        {
          "name": "Group C",
          "value": 398
        },
        {
          "name": "Group D",
          "value": 900
        },
        {
          "name": "Group E",
          "value": 308
        },
        {
          "name": "Group F",
          "value": 800
        }
      ];
         
    return (
        <div>
            <h1>This is an awesome PieChart!!</h1>
            <PieChart width={730} height={250}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={120} fill="#82ca9d" label />

            </PieChart>
        </div>
    );
};

export default MyPieChart;