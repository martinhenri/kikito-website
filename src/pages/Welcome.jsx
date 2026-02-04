import React, { useEffect, useRef } from "react";

const Welcome = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      handleImageLoad();
    }
  }, [imgRef]);

  const handleImageLoad = () => {
    // Estimate the duration of the GIF in milliseconds
    const gifDuration = 8700; // Example: 5 seconds
    setTimeout(() => {
      // go to home page
      window.location.href = "/home";
    }, gifDuration);
  };

  return (
    <div className="container">
      <img
        ref={imgRef}
        src="/videos/welcome.gif"
        alt="Welcome GIF"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Welcome;
