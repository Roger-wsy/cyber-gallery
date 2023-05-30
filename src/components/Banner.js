import React from "react";
import "./Banner.css";
import bannerImage from "../images/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImage} alt="Banner" />
      <h2 className="banner-title">Cyber Gallery</h2>
    </div>
  );
};

export default Banner;
