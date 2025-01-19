// src/components/Tile.js
import React from "react";
import PropTypes from "prop-types";
import "./Tile.css"; // Import the CSS file for styling

const Tile = ({
  backgroundImage,
  text,
  zoom,
  backgroundPosition,
  imagePosition,
}) => {
  const tileStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: zoom,
    backgroundPosition: backgroundPosition,
  };

  return (
    <div className="tile" style={tileStyle}>
      <div className="tile-content">
        <div>{text}</div>
      </div>
    </div>
  );
};

Tile.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  zoom: PropTypes.string,
  backgroundPosition: PropTypes.string,
};

Tile.defaultProps = {
  zoom: "cover",
  backgroundPosition: "center",
};
export default Tile;
