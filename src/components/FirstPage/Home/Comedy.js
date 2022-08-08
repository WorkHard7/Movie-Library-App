import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";

const Comedy = (props) => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getMoviesList(35, 1994)
      .then((res) => {
        setComedyMovies(res.slice(0, 6));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="comedySection">
        <h1 className="comedyText">Comedy</h1>
        <div className="linePageOne"></div>
        <div className="comedy">
          {comedyMovies.map((movie, index) => (
            <div key={movie.id}>
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

export default Comedy;
