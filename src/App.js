
// import { TimeWise } from "./urls";
import Pivot from './components/Pivot';
import ListStock from './components/ListStock';
import AllStocks from './components/AllStocks';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'

import { useEffect, useState } from "react";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  

  return (
    <div className="App">
      <Pivot/>
      <AllStocks/>
      <ListStock/>
    <div style={{ width: 700 }}>
      <BarChart chartData={userData} />
    </div>
    <div style={{ width: 700 }}>
      <LineChart chartData={userData} />
    </div>
    <div style={{ width: 700 }}>
      <PieChart chartData={userData} />
    </div>
  </div>
 
   
  );
}

export default App;
