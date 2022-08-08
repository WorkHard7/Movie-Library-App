import React from "react";
import Logo from "./Home/Logo";
import NavBar from "./Home/NavBar";
import Search from "./Home/Search";
import Action from "./Home/Action";
import Comedy from "./Home/Comedy";
import Romance from "./Home/Romance";
import Documentary from "./Home/Documentary";
import Footer from "./Home/Footer";

const Home = () => {
  return (
    <>
      <Logo />
      <NavBar />
      <Search />
      <Action />
      <Romance />
      <Comedy />
      <Documentary />
      <Footer />
    </>
  );
};

export default Home;
