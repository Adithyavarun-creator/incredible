import React, { useEffect } from "react";
import {
  ImageContainer,
  MovieCardWrapper,
  Title,
  Description,
  ContentBox,
  RatingBox,
  Rating,
} from "../../styles/MovieCardStyle";
import { LinkStyle } from "../../styles/LinkStyle";
import { BsFillStarFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average, overview } = movie;

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <MovieCardWrapper data-aos="fade-up">
        <LinkStyle to={`/movie/${id}`}>
          <ImageContainer src={API_IMAGE + poster_path} alt={title} />
          <ContentBox>
            <Title>{title}</Title>
            <Description>{overview.slice(0, 30)}...</Description>
          </ContentBox>
        </LinkStyle>

        <RatingBox>
          <BsFillStarFill className="starIcon" />
          <Rating>{vote_average}</Rating>
        </RatingBox>
      </MovieCardWrapper>
    </>
  );
};

export default MovieCard;
