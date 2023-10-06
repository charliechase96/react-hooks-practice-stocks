import React, {useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(response => response.json())
      .then(data => setStocks(data));
  }, []);
  
  let displayedStocks = [...stocks];

  if (filter !== "") {
    displayedStocks = displayedStocks.filter(stock => stock.type === filter);
  }

  if (sort === "Alphabetically") {
    displayedStocks.sort((a, b) => a.name.localeCompare(b.name));
  } 
  else if (sort === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  const buyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const sellStock = (stockId) => {
    setPortfolio(portfolio.filter(stock => stock.id !== stockId));
  };

  

  return (
    <div>
      <SearchBar setSort={setSort} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
