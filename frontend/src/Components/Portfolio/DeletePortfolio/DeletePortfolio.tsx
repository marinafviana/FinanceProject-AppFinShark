import React from "react";

interface Props {
  onPortfolioDelete: (symbol: string) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  const handleDelete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onPortfolioDelete(portfolioValue);
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <button
          type="submit"
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
        >
          X
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
