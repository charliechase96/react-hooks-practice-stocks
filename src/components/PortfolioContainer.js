import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <div key={stock.id} onClick={() => sellStock(stock.id)}>
          <Stock stock={stock} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioContainer;
