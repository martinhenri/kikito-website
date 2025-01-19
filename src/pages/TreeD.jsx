import React from "react";
import KikitoGallery from "../components/Gallery/KikitoGallery";
import { modelisations } from "../components/Gallery/Images";
import ReactCompareImage from "../components/ReactCompareImage/ReactCompareImage";
const TreeD = () => {
  const skeleton = (
    <div class="loader compare-image-loader">
      <div class="image__loader">
        <div class="child__image__loader"></div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>
        <span>LIGHTING COMPOSITING </span>
        <img
          className="align-self-center"
          alt="Title icon"
          src="/logos/icn-nuke.webp"
        />
      </h1>
      <p>
        Explorez ma démo de compositing artist, condensé de 4 ans d'expérience.
        Le compositing est l'assemblage de différentes couches d'images pour
        créer une image finale. Cela implique l'ajustement des couleurs, de la
        luminosité et l'application d'effets spéciaux pour créer une image
        homogène. C'est une étape cruciale dans la création d'images visuelles
        pour le cinéma, l'animation et les effets spéciaux.
      </p>
      <video
        className="w-100"
        loop
        autoPlay
        mute
        controls
        controlsList="nodownload"
        src="/videos/DEMO_SITE_H264.mp4"
      />
      <div className="mt-4">
        <ReactCompareImage
          leftImage="/compare-images/before-1.png"
          rightImage="/compare-images/after-1.png"
          skeleton={skeleton}
        />
      </div>
      <div className="mt-4">
        <ReactCompareImage
          leftImage="/compare-images/before-2.jpeg"
          rightImage="/compare-images/after-2.jpeg"
          skeleton={skeleton}
        />
      </div>
      <p className="legend mt-1">
        <i>Lighting/compo projet Space Apéro</i>
      </p>
    </div>
  );
};

export default TreeD;
