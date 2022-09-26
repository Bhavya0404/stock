import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { ListCoins, RealTime } from "./urls";
import { useEffect, useState } from "react";
import { TimeWise } from "./urls";

function App() {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [close, setClose] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(ListCoins("AAPL"));
      setValues(data);
      setLow(parseFloat(data.low));
      setHigh(parseFloat(data.high));
      setClose(parseFloat(data.close));
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDateandTime = async () => {
      const { data1 } = await axios.get(TimeWise());
      console.log(data1);
    };
    fetchDateandTime();
  }, []);

  const woodiePivot = () => {
    let pp = (high + low + close) / 3;
    let r2 = pp + high - low;
    let r1 = 2 * pp - low;
    let s1 = 2 * pp - high;
    let s2 = pp - high + low;

    console.log(s2);
  };

  const camarillaPivot = () => {
    let r4 = close + (high - low) * 1.5;
    let r3 = close + (high - low) * 1.25;
    let r2 = close + (high - low) * 1.1666;
    let r1 = close + (high - low) * 1.0833;
    let pp = (high + low + close) / 3;
    let s1 = close - (high - low) * 1.0833;
    let s2 = close - (high - low) * 1.1666;
    let s3 = close - (high - low) * 1.25;
    let s4 = close - (high - low) * 1.5;

    console.log(s2);
  };

  const fibonacciPivot = () => {
    let pp = (high + low + close) / 3;
    let r3 = pp + (high - low) * 1.0;
    let r2 = pp + (high - low) * 0.618;
    let r1 = pp + (high - low) * 0.382;

    let s1 = pp - (high - low) * 0.382;
    let s2 = pp - (high - low) * 0.618;
    let s3 = pp - (high - low) * 1.0;
    console.log(s2);
  };

  return (
    <div className="App">
      <button onClick={woodiePivot}>click</button>
      <button onClick={camarillaPivot}>click</button>
      <button onClick={fibonacciPivot}>click</button>
    </div>
  );
}

export default App;
