import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (symbol: string) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>

      {portfolioValues.length === 0 ? (
        <p>No items in portfolio</p>
      ) : (
        <ul>
          {portfolioValues.map((portfolioValue) => (
            <CardPortfolio
              key={portfolioValue} 
              portfolioValue={portfolioValue}
              onPortfolioDelete={onPortfolioDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListPortfolio;