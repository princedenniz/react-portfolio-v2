import React from "react";
import "../styles/background.css";
import video from "../assets/backgroundImg.mp4";
// import fallback from "../assets/backgroundImg.jpg";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        // poster={fallback}
      >
        <source src={video} type="video/mp4"/>
      </video>
    </>
  );
};

export default Background
