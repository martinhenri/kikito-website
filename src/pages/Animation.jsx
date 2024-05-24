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
        src="/videos/ANIM_ALLA_H264.mp4"
      />
      <h1 className="animation-header pt-3">
        <span>RESEAUX SOCIAUX </span>
      </h1>
      <div className="d-flex justify-content-space-around">
        <video
          className="w-32"
          controls
          src="/videos/histoire-objets-cuisine.mp4"
          poster="/preview/videoCouteau.png"
        />
        <video
          className="w-32"
          controls
          src="/videos/histoire-objets-ecouteurs.mp4"
          poster="/preview/videoEcouteur.png"
        />
        <video
          className="w-32"
          controls
          src="/videos/montagne-whouaou.mp4"
          poster="/preview/videoMontagne.png"
        />
      </div>
      <h1 className="animation-header">
        <span>MARIAGES </span>
      </h1>
      <video
        className="w-100"
        controls
        src="/videos/mariage-pri.mp4"
        poster="/preview/videoPri.png"
      />
      <p className="legend">
        <i>
          Dinesh Dumas pour les illustration du camping, collège, résidence et
          le bar
        </i>
      </p>
      <video
        className="w-100"
        controls
        src="/videos/mariage-anais.mp4"
        poster="/preview/videoAnais.png"
      />
      <p className="legend">
        <i>Vidéaste : Nicolas le bozec</i>
      </p>

      <h1 className="animation-header">
        <span>FICTION </span>
      </h1>
      <video className="w-100" controls src="/videos/crazy-potter.mp4" />
    </div>
  );
};

export default Animation;
