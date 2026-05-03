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
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            id={result.symbol}
            key={result.symbol} // 🔥 melhor que uuid
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <h1>No results!</h1>
      )}
    </>
  );
};

export default CardList;