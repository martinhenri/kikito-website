import React, { useRef } from "react";
import { customs } from "../components/Gallery/Images";
import KikitoGallery from "../components/Gallery/KikitoGallery";
const Custom = () => {
  const scrollPaintingContainerRef = useRef(null);

  const handleScroll = (direction, ref) => {
    const scrollContainer = ref.current;
    scrollContainer.scrollBy({
      left: (direction === "left" ? -1 : 1) * 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <h1>PERSONNALISATION</h1>
      <p>
        Je réalise des portraits et illustrations à partir de vos photos. Que ce
        soit un portrait d’un proche, de votre animal de compagnie, ou une
        illustration capturant un moment spécial, chaque création est pensée
        pour refléter la personne ou de la scène. Vous pouvez commander ici :{" "}
        <a
          href="https://www.etsy.com/shop/NomDeVotreBoutique"
          target="_blank"
          rel="noopener noreferrer"
        >
          boutique
        </a>
      </p>
      <div className="display-flex-align-items-center">
        <button
          type="button"
          style={{ left: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-prev"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("left", scrollPaintingContainerRef)}
        ></button>
        <div
          ref={scrollPaintingContainerRef}
          className="kikito-gallery kikito-gallery-paintings"
        >
          <KikitoGallery images={customs} enableLoading />
        </div>
        <button
          type="button"
          style={{ right: "15%", top: "60%" }}
          class="nav-button-gallery nav-button-gallery-next"
          aria-label="Previous image"
          title="Previous image"
          onClick={() => handleScroll("right", scrollPaintingContainerRef)}
        ></button>
      </div>
    </div>
  );
};

export default Custom;
