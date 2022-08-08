import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navlinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Genres</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">TV Seasons</a>
        </li>
        <li>
          <Link to="/tvShows">TV Shows</Link>
        </li>
        <li>
          <Link to="/topRatedMovies">Top Rated</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
