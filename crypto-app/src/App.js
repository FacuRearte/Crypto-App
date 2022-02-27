import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TableCoins } from "./components/TableCoins";

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

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
    <input type="text" placeholder="Search a coin" className="form-control bg-dark text-light border-0 mt-4 text-center justify-content-center"
     onChange={e => setSearch(e.target.value)}></input>
     <button onClick={getData()} className="bg-dark text-light border-0 mt-4 text-center justify-content-center text-muted">Refresh values</button>
      <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
