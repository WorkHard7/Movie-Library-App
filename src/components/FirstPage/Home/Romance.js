import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";

const Romance = (props) => {
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getMoviesList(10749, 1995)
      .then((res) => {
        setRomanceMovies(res.slice(0, 6));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="romanceSection">
        <h1 className="romanceText">Romance</h1>
        <div className="linePageOne"></div>
        <div className="romance">
          {romanceMovies.map((movie, index) => (
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

export default Romance;
