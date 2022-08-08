import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="leftSide">
        <div>
          <h2>Links</h2>
        </div>
        <div className="allLinks">
          <div className="linksLeft">
            <ul>
              <li>
                <a href="/">Movies</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">TV Series</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Short Films</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Most Watched</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Top Rated</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">F2 Movies</a>
              </li>
            </ul>
          </div>
          <div className="linksMiddle">
            <ul>
              <li>
                <a href="/">Action</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Romance</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Comedy</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Documentary</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Sci-Fi</a>
              </li>
            </ul>
          </div>
          <div className="linksRight">
            <ul>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Request</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Mail</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="aboutSection">
          <h2>About Us</h2>
          <div className="aboutText">
            <p>
              <span className="redText">Movietrex</span> is free streaming
              website with zero ads, it allows you watch series online free,
              watch tv shows online in high quality for free.
            </p>
            <p>
              This site does not store any files on our server, we only linked
              to the media which is hosted on 3rd party services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
