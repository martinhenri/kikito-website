import React from "react";

const Home = () => {
  return (
    <div className="container">
      <video
        className="w-100"
        loop
        autoPlay
        muted
        src="/videos/raccoonVECTEUR_H264.mp4"
      />
    </div>
  );
};

export default Home;
