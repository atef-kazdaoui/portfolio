import React from "react";
import atef from "../../assets/Home/1.png";

import "./Profile.css";
import { motion } from "framer-motion";

export default function Profile() {
  const containerVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
     x: "0%",
      transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: "60" },
    },
    
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
      className="profil-Container"
    >
      <div className="profil-L">
        <h2 className="welcome">bienvenue</h2>
        <h1 className="imhassen">Je suis atef kazdaoui </h1>

       <span className="profil-desc">
       je suis un développeur Front & Back-End basé à Nice ,France. J'aime les longues promenades sur la plage, écrire du code propre, et pousser mes compétences à la limite. Mes centres d'intérêt sont de rejoindre une équipe passionnante de personnes passionnées, la croissance personnelle, et faire des visages idiots.
       </span>
      </div>
      <div className="profil-R">
        
        <img className="atef-pic" src={atef} />

        <div className="icons">
          <div className="facebook">
            <a href="https://www.facebook.com/atef.hnach">
              <h3>
                {" "}
                <i
                  className="fa fa-facebook-square"
                  style={{ color: "#fd4b03", width: "50px" }}
                ></i>
              </h3>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/atef-kasdaoui-2743901ab/">
              <h3>
                {" "}
                <i
                  class="fa fa-linkedin-square"
                  aria-hidden="true"
                  style={{ color: "#fd4b03", width: "50px", size: "4cm" }}
                ></i>
              </h3>
            </a>
          </div>
          <div className="git">
            <a href="https://github.com/atef-kazdaoui">
              <h3>
                {" "}
                <i
                  className="fa fa-github-square"
                  style={{ color: "#fd4b03", width: "50px" }}
                ></i>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
