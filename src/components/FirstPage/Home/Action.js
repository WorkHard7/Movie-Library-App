import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";

const Action = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getMoviesList(28, 1998)
      .then((res) => {
        setActionMovies(res.slice(0, 6));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="actionSection">
        <h1 className="actionText">Action</h1>
        <div className="linePageOne"></div>
        <div className="action">
          {actionMovies.map((movie, index) => (
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
        </div>
      </div>
    </>
  );
};

export default Action;
