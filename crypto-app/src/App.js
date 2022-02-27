import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TableCoins } from "./components/TableCoins";

function App() {

  const [coins, setCoins] = useState([])

  const getData = async() => {
   const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  setCoins(res.data)
  }

  useEffect (() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="row">
      <h1>Coin Market</h1>
      <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
