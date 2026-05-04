import { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent<HTMLFormElement>) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input
        type="hidden"
        name="symbol"
        value={symbol}
      />

      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

export default AddPortfolio;