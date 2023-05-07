import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "./veille-techno.css";

import brush from "../../assets/Home/4.png";
import veille from "../../assets/Home/veille.pdf";

export default function veilletechno () {
  return (
    <div id="Mission" className="veilletechno-container">
      <div className="title-veilletechno">
        <img
          className="brushImage-veilletechno"
          src={brush}
          alt="you have problem with the image"
        />
        <h2 className="veilletechnoKit">veille technologique</h2>
      </div>

      <div className="display-Techno">
        <div className="techno">
          <div className="tachno-but">
            <a href={veille} >
            <button
              className="btn primary-btn"
              style={{ backgroundColor: "#fe5756" }}
            >
              Description
            </button>
            </a>
          </div>
          <div className="techno-desc">
          <span className="desc">
          pour ma veille technologique j'ai choisi le sujet d'imprimante 3d .
            </span>
          </div>
        </div>
        </div>
      </div>
  );
}
