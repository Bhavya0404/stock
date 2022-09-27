
// import { TimeWise } from "./urls";
import Pivot from './components/Pivot';
import ListStock from './components/ListStock';
import AllStocks from './components/AllStocks';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'

function App() {
  

  return (
    
      <div>
        <Pivot />
        <ListStock />
        <AllStocks />
      </div>
   
  );
}

export default App;
