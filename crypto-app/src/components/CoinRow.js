import React from "react";

export const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr>
        <td>{index}</td>
      <td>{coin.name}</td>
      <td>{coin.price}</td>
    </tr>
  );
};
