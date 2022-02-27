import React from "react";

export const CoinRow = ({ coin, index }) => {
  return (
    <tr>
        <td>{index}</td>
      <td>
          <img src={coin.image} alt={coin.name} style={{width: '3%'}} className="img-fluid me-2"></img>
          <span>{coin.name}</span>
          <span className="ms-2 text-muted text-uppercase">({coin.symbol})</span>
          </td>
      <td>{coin.current_price}</td>
      <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
          {coin.price_change_percentage_24h}</td>
      <td className={coin.total_volume> 0 ? 'text-success' : ''}>
          {coin.total_volume}
          </td>

    </tr>
  );
};
