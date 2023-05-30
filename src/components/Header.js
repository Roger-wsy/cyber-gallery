import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Cyber Gallery</h1>
      <nav className="navigation">
        <a href="/home">Home</a>
        <a href="/gallery">Gallery</a>
      </nav>
    </header>
  );
};

export default Header;
