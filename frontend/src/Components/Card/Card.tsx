import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { CompanySearch } from "../../company.d";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (symbol: string) => void; // ✅ corrigido
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      id={id}
    >
      <Link
        to={`/company/${searchResult.symbol}`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchResult.description} ({searchResult.symbol}) 
      </Link>

      <p className="text-veryDarkBlue">
        {searchResult.displaySymbol} 
      </p>

      <p className="font-bold text-veryDarkBlue">
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