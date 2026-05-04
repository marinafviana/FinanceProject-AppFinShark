import React from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company.d";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (symbol: string) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            id={result.symbol}
            key={result.symbol}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;