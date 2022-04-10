import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function LineCharts({ data }) {
  return (
    <ResponsiveContainer debounce={20}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
    
      <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
    </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts;
