import React from "react";

interface Props {
  onPortfolioDelete: (symbol: string) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <button onClick={() => onPortfolioDelete(portfolioValue)}>
      X
    </button>
  );
};

export default DeletePortfolio;