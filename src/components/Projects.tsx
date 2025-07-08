import React, { useRef } from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <div className =  "white-background">
<div className="container py-5">
  {/* Heading Row */}
  <div className="row align-items-center mb-5">
    <div className="col-md-4">
      <h1 className="fw-bold">Projects</h1>
    </div>
    <div className="col-md-8">
      <p className="fs-4 fw-semibold mb-0 tight-line">
      </p>
    </div>
  </div>

  {/* Project Cards Row */}
  <div className="row g-4">
    <div className="col-12 col-md-4">
      <div className="bg-secondary" style={{ height: "150px" }}></div>
    </div>
    <div className="col-12 col-md-4">
      <div className="bg-secondary" style={{ height: "150px" }}></div>
    </div>
    <div className="col-12 col-md-4">
      <div className="bg-secondary" style={{ height: "150px" }}></div>
    </div>
  </div>

</div>

<footer>
        {/* Footer copyright */}
    <div className="bg-light border-top mt-5 py-3 text-start">
      <div className="container">
        <small className="text-muted fw-semibold">© 2025 Sanya Gowda. All Rights Reserved.</small>
      </div>
    </div>
</footer>
</div>




  );
};




export default Projects;