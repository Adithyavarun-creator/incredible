import React from "react";
import {
  SearchBox,
  SearchInput,
  SearchButton,
} from "../../styles/SearchStyles";

const Search = ({ setSearch, search, searchMovie }) => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies 🎬"
      />
      <SearchButton onClick={searchMovie}>Search Movie</SearchButton>
    </SearchBox>
  );
};

export default Search;
