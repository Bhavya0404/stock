import axios from "axios";
import { ListCoins, RealTime } from "./urls";
import { useEffect, useState } from "react";
// import { TimeWise } from "./urls";
import Pivot from './components/Pivot';

function App() {
  

  return (
    <div className="App">
      <Pivot />
    </div>
  );
}

export default App;
