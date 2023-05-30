import React from "react";
import Card from "./Card";
import "./Gallery.css";

const Gallery = () => {
  const imageDetails = [
    {
      imagePath: "/00010-653884106.png",
      title: "Masked Man",
      model: "nyanMix_230303Absurd2",
    },
    {
      imagePath: "/00008-962218138.png",
      title: "Black Coat Girl",
      model: "nyanMix_230303Absurd2",
    },
    {
      imagePath: "/00014-420165542.png",
      title: "Army",
      model: "nyanMix_230303Absurd2",
    },
    {
      imagePath: "/00015-4188612158.png",
      title: "Police Car",
      model: "nyanMix_230303Absurd2",
    },
    {
      imagePath: "/00030-3064295201.png",
      title: "Ryu",
      model: "nyanMix_230303Absurd2",
    },
    {
      imagePath: "/00044-2218902719.png",
      title: "First Camping",
      model: "darkSushiMixMix",
    },
    {
      imagePath: "/00045-2218902719.png",
      title: "Violist",
      model: "darkSushiMixMix",
    },
    {
      imagePath: "/00047-2218902719.png",
      title: "Image 2",
      model: "darkSushiMixMix",
    },
    {
      imagePath: "/00059-1577349863.png",
      title: "Boat",
      model: "darkSushiMixMix",
    },
    {
      imagePath: "/00062-3105314543.png",
      title: "Old Japanese Street",
      model: "darkSushiMixMix",
    },
    {
      imagePath: "/00002-2073189777.png",
      title: "Wonderland",
      model: "tsubaki_v10",
    },
    {
      imagePath: "/00000-153300213.png",
      title: "Singer",
      model: "ghostmix_v20",
    },
    {
      imagePath: "/00001-2587441285.png",
      title: "Futuristic Musician",
      model: "tsubaki_v10",
    },
    {
      imagePath: "/00005-914104004.png",
      title: "Girl Samurai",
      model: "tsubaki_v10",
    },
    {
      imagePath: "/00006-3140949341.png",
      title: "DJ Kazuya",
      model: "tsubaki_v10",
    },
    {
      imagePath: "/00009-2714938588.png",
      title: "Nova-9",
      model: "ghostmix_v20",
    },
    {
      imagePath: "/00005-2949974140.png",
      title: "Emperor Kaito",
      model: "ghostmix_v20",
    },
    {
      imagePath: "/00102-844124785.png",
      title: "Forest Sunset",
      model: "ghostmix_v20",
    },
    {
      imagePath: "/00092-2740677699.png",
      title: "Cat",
      model: "tsubaki_v10",
    },
    {
      imagePath: "/00090-1234189589.png",
      title: "ND-7",
      model: "tsubaki_v10",
    },
    // Add more image details as needed
  ];

  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="card-grid">
        {imageDetails.map((image, index) => (
          <Card
            key={index}
            imagePath={image.imagePath}
            title={image.title}
            model={image.model}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
