import React, { useState } from "react";
import "./Card.css";

const Card = ({ imagePath, title, model }) => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsImageEnlarged(true);
  };

  const handleCloseImage = () => {
    setIsImageEnlarged(false);
  };

  return (
    <div className="card">
      <img
        src={imagePath}
        alt="Image"
        className="card-image"
        onClick={handleImageClick}
      />
      {isImageEnlarged && (
        <div className="popup-container" onClick={handleCloseImage}>
          <div className="popup-content">
            <span className="close-btn" onClick={handleCloseImage}>
              &times;
            </span>
            <img src={imagePath} alt="Popup Image" className="popup-image" />
          </div>
        </div>
      )}
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-upload-time">Model Used: {model}</p>
      </div>
    </div>
  );
};

export default Card;
