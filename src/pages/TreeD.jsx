import React from "react";
import ReactCompareImage from "react-compare-image";

const TreeD = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>LIGHTING COMPOSITING </span>
        <img className="title-icon-nuke" alt="Title icon" src="/icn-nuke.png" />
      </h1>
      <p
        style={{
          marginTop: "60px",
          fontSize: "18px",
          fontFamily: "fantasy",
          marginLeft: "4%",
          marginRight: "4%",
          textAlign: "justify",
        }}
      >
        Explorez ma démo de compositing artist, condensé de 4 ans d'expérience.
        Le compositing est l'assemblage de différentes couches d'images pour
        créer une image finale. Cela implique l'ajustement des couleurs, de la
        luminosité et l'application d'effets spéciaux pour créer une image
        homogène. C'est une étape cruciale dans la création d'images visuelles
        pour le cinéma, l'animation et les effets spéciaux.
      </p>
      <video
        style={{ width: "94%", paddingLeft: "3%" }}
        loop
        autoPlay
        mute
        controls
        src="/DEMO_LEA_BISCARAT_2023_H264.mp4"
      ></video>
      <div style={{ padding: "10%", display: "flex" }}>
        <ReactCompareImage
          leftImage="/before-1.png"
          rightImage="/after-1.png"
        />
      </div>{" "}
      <div style={{ paddingLeft: "10%", paddingRight: "10%", display: "flex" }}>
        <ReactCompareImage
          leftImage="/before-2.jpeg"
          rightImage="/after-2.jpeg"
        />
      </div>
      <p
        style={{
          fontSize: "18px",
          fontFamily: "fantasy",
        }}
      >
        Lighting/compo projet Space Apéro
      </p>
    </div>
  );
};

export default TreeD;
