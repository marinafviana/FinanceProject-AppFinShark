import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company.d";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (symbol: string) => {
    if (portfolioValues.includes(symbol)) return;
    setPortfolioValues((prev) => [...prev, symbol]);
  };

  const onPortfolioDelete = (symbol: string) => {
    setPortfolioValues((prev) =>
      prev.filter((value) => value !== symbol)
    );
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!search.trim()) return; 

    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      setSearchResult([]);
    } else {
      setSearchResult(result);
      setServerError(null);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <Hero /> 

      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />

      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />

      {serverError && <div>{serverError}</div>}
    </div>
  );
}

export default App;