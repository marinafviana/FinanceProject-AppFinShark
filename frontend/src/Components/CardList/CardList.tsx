import React from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company.d";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={result.symbol} searchResult={result}/>
          );
        })
      ) : (
        <h1>No results!</h1>
      )}
    </>
  );
};

export default CardList;