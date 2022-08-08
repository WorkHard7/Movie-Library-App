import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../FirstPage/Home/Logo";
import NavBar from "../FirstPage/Home/NavBar";
import Footer from "../FirstPage/Home/Footer";
import VideoSection from "./VideoSection";
import RecommendMovies from "./RecommendMovies";

const SecondPage = (props) => {
  const [movie, setMovie] = useState([]);
  let { movieId } = useParams();

  const API_KEY = "735319a204ff868ba4b284218c3fe33d";
  const API_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  return (
    <>
      <Logo />
      <NavBar />
      <VideoSection
        title={movie.title}
        path={movie.poster_path}
        overview={movie.overview}
        vote={movie.vote_average}
        originalTitle={movie.original_title}
      />
      <RecommendMovies path={movie.poster_path} id={movieId} />
      <Footer />
    </>
  );
};

export default SecondPage;
