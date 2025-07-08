import React, { useRef } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleHover = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = "";
      iframeRef.current.src = src;
    }
  };

  return (
    <nav className="navbar navbar-expand-md theme-primary navbar-light sticky-top navbar-bottom-stroke">
      <div className="container-fluid position-relative">

        {/* 🔻 Logo on the Left */}
        <div className="d-none d-md-block" onMouseEnter={handleHover}>
          <div className="svg-crop-container">
            <iframe
              ref={iframeRef}
              src="/svg.svg"
              title="Animated Logo"
              className="cropped-svg"
            />
          </div>
        </div>

        {/* 🔻 Navbar Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

{/* 🔻 Nav Links (centered) */}
<div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav gap-md-4">
    <li className="nav-item">
      <a className="nav-link" href="#">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About Me</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Resume</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>

  </ul>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
