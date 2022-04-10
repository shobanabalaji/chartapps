import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function PieCharts({data}){
    return(
      <ResponsiveContainer debounce={20}>
        <PieChart width={400} height={400}>
        <Pie
          dataKey="uv"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    )
}
export default PieCharts;