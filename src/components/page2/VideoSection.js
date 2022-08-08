import React from "react";

const VideoSection = (props) => {
  return (
    <section className="twoSections">
      <section className="videoSection">
        <div className="imageSection">
          <div className="videoImage">
            <img
              className="posterImage"
              src={`http://image.tmdb.org/t/p/w500/${props.path}`}
              alt="poster images"
            ></img>
            <a href="/logo">
              <img className="play" src="../play.png" alt="play button"></img>
            </a>
          </div>
        </div>
      </section>
      <section className="movieInfoSection">
        <div className="movieInfo">
          <div className="movieDetails">
            <h1>{props.title}</h1>
            <div className="smallIcons">
              <img className="star" src="../star.svg" alt="star"></img>
              <h2>{props.vote}</h2>
              <img src="../hd.png" alt="hd"></img>
            </div>
            <p>{props.overview}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VideoSection;
