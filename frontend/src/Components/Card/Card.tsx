import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company.d";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (symbol: string) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}) => {
  return (
    <div id={id} className="card">
      <div className="details">
        <h2>
          {searchResult.description} ({searchResult.symbol})
        </h2>
        <p>{searchResult.displaySymbol}</p>
      </div>

      <p className="info">
        {searchResult.type}
      </p>

      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;