import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  onSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
  search: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search company (ex: apple, tesla...)"
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;