import React from "react";
import ReactCompareImage from "react-compare-image";
import KikitoGallery from "../components/Gallery/KikitoGallery";
import { modelisation, modelisations } from "../components/Gallery/Images";

const TreeD = () => {
  return (
    <div className="container">
      <h1>
        <span>LIGHTING COMPOSITING </span>
        <img
          className="align-self-center"
          alt="Title icon"
          src="/logos/icn-nuke.png"
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
        src="/videos/DEMO_LEA_BISCARAT_2023_H264.mp4"
      />
      <div className="mt-4">
        <ReactCompareImage
          leftImage="/compare-images/before-1.png"
          rightImage="/compare-images/after-1.png"
        />
      </div>{" "}
      <div className="mt-4">
        <ReactCompareImage
          leftImage="/compare-images/before-2.jpeg"
          rightImage="/compare-images/after-2.jpeg"
        />
      </div>
      <p className="legend mt-1">
        <i>Lighting/compo projet Space Apéro</i>
      </p>
      <h1 className="pt-3">
        <span>MODELISATION </span>
        <img
          className="align-self-center pl-1"
          alt="Title maya icon"
          src="/logos/logo-maya.png"
          style={{ height: "30px" }}
        />
      </h1>
      <div className="modelisation-gallery">
        <KikitoGallery images={modelisations} />
      </div>
    </div>
  );
};

export default TreeD;
