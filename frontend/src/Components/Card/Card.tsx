import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company.d";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }: Props) => {
  return (
    <div id={id} className="card">
      <div className="details">
        <h2>
          {searchResult.description} ({searchResult.symbol})
        </h2>
        <p>Type: {searchResult.type}</p>
      </div>

      <p className="info">
        Display: {searchResult.displaySymbol}
      </p>
    </div>
  );
};

export default Card;