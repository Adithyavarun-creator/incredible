import React, { useState } from "react";
import {
  HomeContainer,
  FeatureBox,
  MovieContainer,
  HeaderSubtitle,
  SearchResults,
} from "../styles/HomepageStyle";
import Search from "../components/Search/Search";
import MovieCard from "../components/MovieCard/MovieCard";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [tmdb, setTmdb] = useState([]);
  const [results, setResults] = useState(false);

  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=6e91748064ac036732e6c0b1cd6e553d";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTmdb(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    setResults(false);
    if (search === "") {
      return;
    }
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=6e91748064ac036732e6c0b1cd6e553d&query=${search}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setResults(true);
      setTmdb(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <Header title="NotFlix" />
      <HeaderSubtitle>Watch movies for free !</HeaderSubtitle>
      <FeatureBox>
        <Search
          setSearch={setSearch}
          search={search}
          searchMovie={searchMovie}
        />
      </FeatureBox>
      {results && (
        <SearchResults>
          <h2>
            Search results for <span>{search}</span>
          </h2>
        </SearchResults>
      )}
      <MovieContainer>
        {tmdb &&
          tmdb.map((movie) => (
            <MovieCard key={movie.id} movie={movie} search={search} />
          ))}
      </MovieContainer>
    </HomeContainer>
  );
};

export default Homepage;
