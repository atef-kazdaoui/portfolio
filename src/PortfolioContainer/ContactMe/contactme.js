import React from 'react';
import './contactme.css';
import coffeCup from'../../assets/Home/14.png';
import coffe from'../../assets/Home/15.png';
import brush from'../../assets/Home/13.png';
import CV from'../../assets/Home/CV.pdf';


export default function Contact() {
    return (
        <>
        <div id="contactme" className="contact-container" >
            <div className="coffe-cup">
           <img src={coffeCup} className="coffe-cup-img" alt="coffee cup"/>
           </div>
           <div className="empty">
            <h1 className="title-contact">Contact</h1>
            <h1 className="title2-contact">VOULEZ VOUS UN CAFÉ VIRTUEL</h1>

           </div>
           <div className="coffe">
           <img src={coffe} className="coffeimage" alt="coffee cup"/>
           </div>
           
           <div className="brush">
           <img src={brush} className="brushimage" alt="coffee cup"/>

           </div>
        </div>
            <div className="contact-me-parag">
                
                <a href="mailto:atef.kasdaoui1@gmail.com">
                    <button
                    
                     className="btn primary-btn" style={{backgroundColor:"#fe5756"}}> 
                   engagez-moi
                    </button>
                </a>
                <a href={CV}>
                    <button
                    
                     className="btn primary-btn" style={{backgroundColor:"#fe5756"}}> 
                   mon CV 
                    </button>
                </a>

            </div>
                   </>
    )
}