import React from "react";
import { CoinRow } from "./CoinRow";

const titles = ["Index", "Coin", "Price", "Price Change", "24hr volume"];

export const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins
          ? filteredCoins.map((coin, index) => (
              <CoinRow coin={coin} key={index} index={index} />
            ))
          : coins.map((coin, index) => (
              <CoinRow coin={coin} key={index} index={index} />
            ))}
      </tbody>
    </table>
  );
};
