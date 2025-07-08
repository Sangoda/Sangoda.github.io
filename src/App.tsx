import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fontsource/inter";

import '@fontsource/montserrat/700.css';
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/700.css"; // optional bold
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./App.css"; // ← Add your styles here

const App: React.FC = () => {
  return (
    <div className="background">
      <Navbar />
      <div className="content">
        <Banner />
        <Projects />
      </div>
    </div>
  );
};

export default App;
