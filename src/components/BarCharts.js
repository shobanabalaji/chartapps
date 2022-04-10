import React,{useState} from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


function BarCharts({ data }) {
  const [graphname, setGraphname] = useState("Bar");
  return (
    <div>
   {graphname === 'Bar'?
   <>
    <button className="graph-btn" onClick={() => setGraphname('Line')}>
    Line Graph View
    </button>
    <BarChart
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
      <Bar dataKey='uv' fill='#82ca9d' />
    </BarChart>
    </>:''}

    {graphname === 'Line'?
     <>
     <button  className="graph-btn"  onClick={() => setGraphname('Bar')}>
     Bar Graph View
     </button>
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
    </LineChart></>:''}
    </div>
  );
}

export default BarCharts;
