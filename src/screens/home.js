import React,{ useState } from "react";
import { useSelector } from "react-redux";

import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";

import BarCharts from "../components/BarCharts";
import LineCharts from "../components/LineCharts";
import PieCharts from "../components/PieCharts";
import StackedCharts from '../components/StackedCharts';
import DonutCharts from '../components/DonutCharts';
import BubbleCharts from "../components/BubbleCharts";

import style from '../Style.css';

const initialPositions = [
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 2,
    rowSpan: 2,
  },
];

//import Style from '../Style.css';
const Home = () => {

  const { homeData } = useSelector((state) => state.home);
  const [positions, setPositions] = useState(initialPositions);

  const widgets = [
    {
     header: "Line Graph",
     body:  <LineCharts data={homeData} />,
   },
   {
     header: "Bar Graph",
     body: <BarCharts data={homeData} />,
   },
   {
    header: "Pie Graph",
    body: <PieCharts data={homeData} />,
  },
  {
    header: "Stacked Graph",
    body: <StackedCharts data={homeData} />
  },
  {
    header: "Donut Graph",
    body: <DonutCharts data={homeData} />
  },
  {
    header : "Bubble Graph",
    body : <BubbleCharts data={homeData} />
  }
 ];

 const handleReposition = e => {
  setPositions(e.value);
};

 
  return (

    <div style={{textAlign:'center'}}>
      <div id="fixedheader">
          <h3 className="title">Welcome! Admin - Website Visitors Report</h3>
          <div className="myaccount"><a></a></div>
      </div>
      <div className="chartlist">
     
      </div>
      <TileLayout
        className="tileLayout"
        columns={4}
        rowHeight={255}
        gap={{ rows: 10, columns: 10 }}
        positions={positions}
        items={widgets}
        onReposition={handleReposition}
      />
      <div id="fixedfooter">
      <div>@2022 Reports</div>
      </div>

    </div>
  );
};

export default React.memo(Home);
