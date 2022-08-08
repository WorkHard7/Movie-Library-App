import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../FirstPage/Home/Logo";
import NavBar from "../FirstPage/Home/NavBar";
import Search from "../FirstPage/Home/Search";
import apiClient from "../../api/apiClient";
import Footer from "../FirstPage/Home/Footer";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .getTopRated()
      .then((res) => {
        setTopRated(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Logo />
      <NavBar />
      <Search />
      <section>
        <div className="topRatedSection">
          <h1 className="topRatedText">Top Rated Movies</h1>
          <div className="linePageOne top-rated"></div>
          <div className="topRated">
            {topRated.map((movie, index) => (
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
      </section>
      <Footer />
    </>
  );
};

export default TopRated;
