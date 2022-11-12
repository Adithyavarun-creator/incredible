import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviePageContainer } from "../../styles/MovieDetailStyle";
import { BsShareFill } from "react-icons/bs";
import BackButton from "../BackButton/BackButton";
import ReactPlayer from "react-player";
import { FaHashtag } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const commonVideoLink = "https://www.youtube.com/watch?v=qEVUtrk8_B4";
  const url = `https://sendsteps-adithyavarun-creator.vercel.app/movie/${id}`;
  const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

  const shareMovie = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${movie.name}`,
          text: "Watch this movie for free without paying",
          url: url,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    getData();
    AOS.init({ duration: 3000 });

    window.scrollTo(0, 120);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6e91748064ac036732e6c0b1cd6e553d&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  const {
    title,
    tagline,
    poster_path,
    release_date,
    overview,
    videoLink,
    genres,
    runtime,
    vote_count,
    popularity,
  } = movie;
  return (
    <>
      <MoviePageContainer>
        <div className="pageContainer">
          <img
            src={API_IMAGE + poster_path}
            className="coverAllImage"
            alt={movie.title}
          />

          <div className="desc">
            <BackButton link="/" text="Go Back" />

            <div className="titleBox" data-aos="fade-down">
              <BiCameraMovie className="movieIcon" />
              <h1 className="movieName">{title}</h1>
            </div>

            <div className="releaseBox">
              <AiTwotoneLike className="likeIcon" />
              <span className="voteCount">{vote_count}</span>
            </div>

            <div className="releaseBox">
              <h1>Runtime is</h1>
              <span>{runtime} min</span>
            </div>

            <div className="genresBox">
              {genres?.map((genre) => (
                <button className="genresButton" key={genre.id}>
                  {genre.name}
                </button>
              ))}
            </div>

            <h2 className="releaseDate">
              Released on <span style={{ color: "red" }}>{release_date}</span>
            </h2>

            <div className="viewShare">
              <div className="viewBox">
                <h2>{popularity}</h2>
                <span>views</span>
              </div>

              <div className="shareBox" onClick={shareMovie}>
                <span style={{ color: "#1da1f2" }}>Share</span>
                <BsShareFill className="shareIcon" />
              </div>
            </div>

            {tagline ? (
              <div className="tagBox">
                <FaHashtag className="tagIcon" />
                <h3 className="movieTag">{tagline}</h3>
              </div>
            ) : (
              <div className="tagBox">
                <FaHashtag className="tagIcon" />
                <h3 className="movieTag">
                  Entertainment with Actions & Comedy
                </h3>
              </div>
            )}
            <div>
              <h3 className="movieDes">{overview}</h3>
            </div>
            <ReactPlayer
              url={videoLink ? videoLink : commonVideoLink}
              width="100%"
              height="400px"
              className="videoPlayer"
              controls
            />
          </div>
        </div>
      </MoviePageContainer>
    </>
  );
};

export default MovieDetail;

/* <div>
        <h1 style={{ color: "white" }}>{id}</h1>
        <h1 style={{ color: "whitesmoke" }}>{movie.overview}</h1>
        <img
          src={API_IMAGE + movie.poster_path}
          className="coverAllImage"
          alt={movie.id}
        />
        {movie.genres?.map((m) => (
          <p key={m.id} style={{ color: "white" }}>
            {m.name}
          </p>
        ))}
      </div> */
