import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { ListCoins } from "./urls";

const getUsers = async () => {
  const { data } = await axios.get(ListCoins("AAPL"));
  console.log(data.close);
};

function App() {
  return (
    <div className="App">
      <button onClick={getUsers}>click</button>
    </div>
  );
}

export default App;
