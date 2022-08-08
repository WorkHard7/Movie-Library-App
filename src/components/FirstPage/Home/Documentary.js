import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";

const Documentary = (props) => {
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getMoviesList(99, 1992)
      .then((res) => {
        setDocumentaryMovies(res.slice(0, 6));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="documentarySection">
        <h1 className="documentaryText">Documentary</h1>
        <div className="linePageOne doc"></div>
        <div className="documentary">
          {documentaryMovies.map((movie, index) => (
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

export default Documentary;
