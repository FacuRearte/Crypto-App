import React from "react";

export const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr key={coin.name}>
      <td>{coin.name}</td>
    </tr>
  );
};
