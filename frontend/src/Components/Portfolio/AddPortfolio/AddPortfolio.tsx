import { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (symbol: string) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <button
      onClick={() => onPortfolioCreate(symbol)}
      className="button"
    >
      Add
    </button>
  );
};

export default AddPortfolio;