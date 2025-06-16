import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src="./public/RedLogo.png" alt="Logo" className="banner-logo" />
        <div className="banner-text">
          <h1>Sanya</h1>
        <h1>Gowda<span className="blinking-cursor"> |</span></h1> {/* Blinking cursor after Gowda */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
