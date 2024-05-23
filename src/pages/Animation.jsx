import React from "react";

const Animation = () => {
  return (
    <div className="container">
      <h1 className="animation-header">
        <span>SHOWREEL ANIMATION </span>
        <img
          className="pl-1"
          alt="Title icon After Effects"
          src="/logos/formation-after-effects.png"
          style={{ height: "43px" }}
        />
        <img
          className="align-self-center"
          alt="Title icon Premiere Pro"
          src="/logos/adobe-premiere-pro-logo-0-1.png"
          style={{ height: "43px" }}
        />
        <img
          className="pl-1"
          alt="Title icon Maya"
          src="/logos/logo-maya.png"
          style={{ height: "30px" }}
        />
      </h1>
      <p>
        Découvrez différent type de travaux, réaliser autour de l'animation 3D,
        montage ou encore du motion design.
      </p>
      <video
        className="w-100"
        loop
        autoPlay
        mute
        controls
        src="/videos/crazy-potter.mp4"
      />
      <video
        className="w-100"
        loop
        autoPlay
        mute
        controls
        src="/videos/space-apero.mp4"
      />
    </div>
  );
};

export default Animation;
