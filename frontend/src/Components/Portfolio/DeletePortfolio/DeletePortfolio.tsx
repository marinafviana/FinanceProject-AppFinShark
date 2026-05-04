import React, { FormEvent } from "react";

interface Props {
  onPortfolioDelete: (symbol: string) => void;
  portfolioValue: string;
}

const DeletePortfolio: React.FC<Props> = ({
  onPortfolioDelete,
  portfolioValue,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPortfolioDelete(portfolioValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;