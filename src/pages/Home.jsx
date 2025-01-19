import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Tile from "../components/Tile/Tile";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const [isMenuVisible, setMenuVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const hasSeenVideo = localStorage.getItem("hasSeenWelcomeVideo");
    if (!hasSeenVideo) {
      setShowVideo(true);
      localStorage.setItem("hasSeenWelcomeVideo", "true");
    }
    setMenuVisible(hasSeenVideo);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      handleImageLoad();
    } else if (img) {
      img.onload = handleImageLoad;
    }

    return () => {
      if (img) {
        img.onload = null;
      }
    };
  }, [imgRef]);

  const handleImageLoad = () => {
    // Estimate the duration of the GIF in milliseconds
    const gifDuration = 8; // Example: 5 seconds
    console.log("GIF duration:", gifDuration);
    setTimeout(() => {
      displayTiles();
    }, gifDuration);
  };

  const displayTiles = () => {
    setMenuVisible(true);
    // hide video
    if (document.querySelector("video")) {
      document.querySelector("video").style.display = "none";
    }
  };

  return (
    <div className="container">
      {/* {showVideo && (
        <video
          className="w-100"
          autoPlay
          muted
          src="/videos/correctionGamma_H264.mp4"
          onEnded={displayTiles}
        />
      )} */}
      {showVideo && (
        <img
          className="w-100"
          ref={imgRef}
          src={"/videos/welcome.gif"}
          alt="GIF"
          style={{ display: isMenuVisible ? "none" : "block" }}
        />
      )}
      {isMenuVisible && (
        <div id="home-menu-tiles">
          <div className="d-flex justify-content-center">
            {/* // menu with tiles with images */}
            <NavLink to="/posters" className={"tile-link"}>
              <Tile backgroundImage="/menu/AFFICHE.webp" text="Affiches" />{" "}
            </NavLink>
            <NavLink to="/custom" className={"tile-link"}>
              <Tile
                backgroundImage="/menu/PERSONALISER02.webp"
                text="Illustrations personnalisées"
              />
            </NavLink>
            <NavLink to="/concepts" className={"tile-link"}>
              <Tile
                backgroundImage="/menu/CONCEPT.webp"
                text="Concepts pour projets"
              />
            </NavLink>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to="/animation" className={"tile-link"}>
              <Tile backgroundImage="/menu/video02.webp" text="Vidéos" />
            </NavLink>{" "}
            <NavLink to="/paintings" className={"tile-link"}>
              <Tile backgroundImage="/menu/PEINTURE.webp" text="Peintures" />
            </NavLink>{" "}
            <NavLink to="/3d" className={"tile-link"}>
              <Tile
                backgroundImage="/menu/COMPOSITING.webp"
                text="Compositing"
              />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
