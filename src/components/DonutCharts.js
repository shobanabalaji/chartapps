import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function DonutCharts({data}){
    return(
      <ResponsiveContainer debounce={20}>
        <PieChart width={400} height={400}>
        <Pie
          dataKey="uv"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={125} 
          innerRadius={80} 
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    )
}
export default DonutCharts;