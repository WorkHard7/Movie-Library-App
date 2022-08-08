import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";

const RecommendMovies = (props) => {
  const [recommendMovie, setRecommendMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getRecommendation(props.id)
      .then((res) => {
        setRecommendMovie(res.slice(0, 6));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="recommendSection">
        <h1>Movies you may Like</h1>
        <div className="line"></div>
      </div>
      <section className="cards">
        {recommendMovie.map((movie, index) => (
          <div className="animeCard" key={movie.id}>
            <img
              className="image"
              onClick={() => navigate(`/movie/${movie.id}`)}
              width={180}
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            ></img>
          </div>
        ))}
      </section>
    </section>
  );
};

export default RecommendMovies;
