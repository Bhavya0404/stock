import { TimeWise } from "./urls";
import "./App.css";
import Pivot from "./components/Pivot";
import ListStock from "./components/ListStock";
import AllStocks from "./components/AllStocks";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Switch,
} from "react-router-dom";

import CandleStick from "./components/CandleStick";
import CandleStick2 from "./components/CandleStick2";

import { useEffect, useState } from "react";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import Candle from "./components/Candle";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
     {/* <CandleStick/> */}

      {/* <Pivot />
      <AllStocks />
      <ListStock /> */}

      <Navbar />
      <Home />
    </div>
  );
}

export default App;
