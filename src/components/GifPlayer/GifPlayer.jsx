// src/components/GifPlayer.js
import React from "react";
import PropTypes from "prop-types";
import "./GifPlayer.css"; // Import the CSS file for styling

const GifPlayer = ({ src, duration, onEnded }) => {
  return (
    <div className="gif-container">
      <img
        className="gif"
        src={src}
        alt="GIF"
        style={{ animationDuration: `${duration}s` }}
        onAnimationEnd={onEnded}
      />
    </div>
  );
};

GifPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onEnded: PropTypes.func.isRequired,
};

export default GifPlayer;
