import React, { useRef } from "react";
import KikitoGallery from "../components/Gallery/KikitoGallery";
import { concepts } from "../components/Gallery/Images";

const Concepts = () => {
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
      <h1>CONCEPTS</h1>
      <p>
        Recherches de personnages et développement graphique. Cette rubrique
        présente les bases créatives et les idées qui donnent vie à différents
        projets : films, jeux, illustrations ou communication visuelle.{" "}
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
          className="kikito-gallery kikito-gallery-common kikito-gallery-concepts"
        >
          <KikitoGallery images={concepts} enableLoading />
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

export default Concepts;
