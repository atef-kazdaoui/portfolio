import React, { useEffect } from "react";
import Flame from "../../assets/Home/10.png";
import mosque from "../../assets/Home/8.png";
import Tooly from "../../assets/Home/9.png";
import Galaxy from "../../assets/Home/11.png";
import Refugee from "../../assets/Home/12.png";
import projetc from "../../assets/Home/PROJECTS.jpg"
import projetc2 from "../../assets/Home/PROJECTS-phone.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import "./Project2.css";
import siteecole from "../../assets/Home/_siteecole.pdf";
import biblio from "../../assets/Home/biblio.pdf";
import tchat from "../../assets/Home/tchat.pdf";


export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="projects2" className="projects2-container">

        <img src={projetc} className="title-pic" style={{ width: "100%" }} />
        <img src={projetc} className="title-pic-phone" />

        
      </div>
      <div className="display-project">
        <div className="mosque-project">
          <div className="mosque-image">
            <img className="mosq-lapt" alt="mosque image" src={mosque} />
          </div>
          <div className="mosque-desc">
            <h2 className="titre-de-projet">Gestion de notes dans une école</h2>
            <span className="desc">
              Le contexte de cette application WEB est de gérer une école a l'aide d'une base de données pour stocker
              et modifier et supprimer certaine données  des personne qui participe dans l'école avec une maximum de sécurité.

            </span>
            <a href="https://github.com/atef-kazdaoui/gestion-ecole">
              <button

                className="btn primary-btn" style={{ backgroundColor: "#fe5756" }}>
                code
              </button>
            </a>
            <a href={siteecole} >
              <button className="btn highlighted-btn">description du projet </button>
            </a>
          </div>
        </div>
        <div className="mosque-project2">
          <div className="mosque-image2">
            <img className="mosq" alt="tooly image" src={Tooly} />
          </div>
          <div className="mosque-desc2">
            <h2 className="titre-de-projet">Gestion des livres (methode MVC) </h2>
            <span className="desc">
              Le contexte de cette application WEB est de gérer une librarie a l'aide d'une base de données
              pour stocker et modifier et supprimer certaine données  avec une maximum de sécurité en methode MVC .

            </span>
            <a href="https://github.com/atef-kazdaoui/bibliov3">
              <button

                className="btn primary-btn" style={{ backgroundColor: "#fe5756" }}>
                code
              </button>
            </a>
            <a href={biblio} >
              <button className="btn highlighted-btn">description du projet</button>
            </a>
          </div>

        </div>
        <div className="mosque-project">
          <div className="mosque-image">
            <img className="mosq-lapt" alt="galaxy image" src={Galaxy} />
          </div>
          <div className="mosque-desc">
            <h2 className="titre-de-projet">tchat</h2>
            <span className="desc">
              Le contexte de ce projets c'est de faire une conversation entre deux personne en direct en utilisant l'éditeur
              eclipse ou l'utilisateur peut faire une inscription qui sera enregistrer dans une base donnée en utlisant une requette
              SQL aprés il se connecte en ulitisant une fonction qui permet de verifier si l'utilisateur est bien enregistrer ou pas
              dans la 2éme partie deux utilisateur qui se connecte et qui font le tchat .    </span>
            <a href="https://github.com/atef-kazdaoui/user-Chat">
              <button

                className="btn primary-btn" style={{ backgroundColor: "#fe5756" }}>
                code
              </button>
            </a>
            <a href={tchat} >
              <button className="btn highlighted-btn">description du projet</button>
            </a>
          </div>
          
        </div>
        <br></br>
        <div className="mosque-project2">
          <div className="mosque-image2">
            <img className="mosq" alt="tooly image" src={Tooly} />
          </div>
          <div className="mosque-desc2">
            <h2 className="titre-de-projet">application web,mobile et desktop pour une salle esthetique   </h2>
            <span className="desc">
             -Le contexte c'est une application web et mobile et desktop pour une salle esthetique esthetique qui vend des produits 
             et qui donne des rendez-vous pour ces clients . <br></br>
             -j'ai fais le front avec le framework react js et native et pour le back le framework express (nodeJS)
            </span>
            <a href="https://github.com/atef-kazdaoui/bibliov3">
              <button

                className="btn primary-btn" style={{ backgroundColor: "#fe5756" }}>
                code
              </button>
            </a>
            <a href={biblio} >
              <button className="btn highlighted-btn">description du projet</button>
            </a>
          </div>

        </div>
        
        
        
          

      </div>
    </>
  );
}
