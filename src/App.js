import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/page2/MovieDetails";
import Home from "./components/FirstPage/Home";
import TopRated from "./components/page2/TopRated";
import TVShows from "./components/page2/TvShows.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/topRatedMovies" element={<TopRated />} />
        <Route path="/tvShows" element={<TVShows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
