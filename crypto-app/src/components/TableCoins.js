import React from "react";
import { CoinRow } from "./CoinRow";

export const TableCoins = ({ coins }) => {
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          <td>All coins</td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index}/>
        ))}
      </tbody>
    </table>
  );
};
