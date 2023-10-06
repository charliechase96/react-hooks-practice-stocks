import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => 
        <div key={stock.id} onClick={() => buyStock(stock)}>
          <Stock stock={stock}/>
        </div>)}
    </div>
  );
}

export default StockContainer;
