import React from 'react';
import {
    CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis,
    YAxis
} from "recharts";
const Chart = () => {
    const data = [
        {
          name: "Store A",
          Mobile: 4000,
          Computer: 2400,
          amt: 2400
        },
        {
          name: "Store B",
          Mobile: 3000,
          Computer: 1398,
          amt: 2210
        },
        {
          name: "Store C",
          Mobile: 2000,
          Computer: 9800,
          amt: 2290
        },
        {
          name: "Store D",
          Mobile: 2780,
          Computer: 3908,
          amt: 2000
        },
        {
          name: "Store E",
          Mobile: 1890,
          Computer: 4800,
          amt: 2181
        },
        {
          name: "Store F",
          Mobile: 2390,
          Computer: 3800,
          amt: 2500
        },
        {
          name: "Store G",
          Mobile: 3490,
          Computer: 4300,
          amt: 2100
        }
      ];
    return (
        <>
            <h1>Simple Chart</h1>
            <LineChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 30,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Computer"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Mobile" stroke="#82ca9d" />
            </LineChart>
        </>
    );
};

export default Chart;