import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';


function BubbleCharts({data}){
    return(
        <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="uv" name="stature" unit="cm" />
          <YAxis type="number" dataKey="pv" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8">
            <LabelList dataKey="x" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    )
}
export default BubbleCharts;