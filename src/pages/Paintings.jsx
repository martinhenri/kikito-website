import React, { useRef } from "react";
import { paintings } from "../components/Gallery/Images";
import KikitoGallery from "../components/Gallery/KikitoGallery";
const Paintings = () => {
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
      <h1>PEINTURES</h1>
      <p>
        Peintures réalisées à l’acrylique et au Posca, mettant en valeur les
        couleurs et les textures. Les pigments du Posca permettent d’obtenir un
        rendu intense et lumineux, enfant des années 90, mon style est marqué
        par la pop culture avec une palette de couleurs à la fois vives et
        douces, le rose, l'orange, le bleu, le vert et le jaune sont les tons
        qui revienne le plus.
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
          className="kikito-gallery kikito-gallery-common kikito-gallery-paintings"
        >
          <KikitoGallery images={paintings} enableLoading />
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

export default Paintings;
