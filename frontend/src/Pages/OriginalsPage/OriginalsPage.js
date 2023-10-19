import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./OriginalsPage.css"

const OriginalsPage = (props) => {
  const [artWork, setArtWork] = useState([]);

  useEffect(() => {
    fetchArtwork();
  }, []);

  const fetchArtwork = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/art");
    setArtWork(response.data);
  };

  const navigate = useNavigate();

  function handleImageClick(image) {
    let imageID = {
      imageID: image.id,
      imageTitle: image.title,
      imageLocation: image.image,
      imagePrice: image.price,
      imageSold: image.sold,
      imageSize: image.size,
    };
    navigate("/piece", { state: imageID });
  }

  function displayArt() {
    let results = artWork.map((image) => {
      const height = image.size.substring(0,2) + "em"
      const width = image.size.substring(5,7) + "em"
      if (image.original == true){
        return (
          <div className="box">
            <h4 style={{display: "flex", justifyContent: "center"}}>{image.title}</h4>
            <img
              style={{ height: `${height}`, width: `${width}`, margin: "1em" }}
              onClick={() => handleImageClick(image)}
              src={image.image}
              alt="art"
            ></img>
          </div>
      );}});
    return results;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", margin: "1em"}}>
      {displayArt()}
    </div>
  );
};

export default OriginalsPage;
