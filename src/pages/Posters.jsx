import React, { useRef } from "react";
import KikitoGallery from "../components/Gallery/KikitoGallery";
import { posters } from "../components/Gallery/Images";

const Posters = () => {
  const scrollPosterContainerRef = useRef(null);
  const scrollDrawingContainerRef = useRef(null);

  const handleScroll = (direction, ref) => {
    const scrollContainer = ref.current;
    scrollContainer.scrollBy({
      left: (direction === "left" ? -1 : 1) * 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <h1>AFFICHES</h1>
      <p>
        Création de visuels pour le print, alliant composition graphique,
        typographie et sens de l’esthétisme. Ces affiches, destinées à des
        événements, à la communication ou encore à la décoration.
      </p>
      <div className="display-flex-align-items-center">
        <button
          type="button"
          style={{ left: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-prev"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("left", scrollPosterContainerRef)}
        ></button>
        <div
          ref={scrollPosterContainerRef}
          className="kikito-gallery kikito-gallery-common kikito-gallery-posters"
        >
          <KikitoGallery images={posters} enableLoading />
        </div>
        <button
          type="button"
          style={{ right: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-next"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("right", scrollPosterContainerRef)}
        ></button>
      </div>
    </div>
  );
};

export default Posters;
