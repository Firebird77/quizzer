import React, { useState } from 'react';
import './style.css'
import family2 from './img/family2.png';
import Main from './Main'



export default function Start () {
    const [show, setShow] = React.useState(true);

    return (
        <div>
            {
             show ? (
                 <div>
                <header >
                <div className="bg"> 
                <h1 className="logo">Quizzer</h1>
                <img src= {family2} width ="auto" height = "30%" alt=""></img>
                  </div>
             
              </header> 


        <div className="container">
        <p className="txt-intro">
          10 questions <br></br> 
          10 secondes/question <br></br> 
          1 bonne réponse : +1 point <br></br> 
          1 mauvaise réponse ou aucune : -1 point
        </p>
        <button className="btn-main"  onClick={()=> setShow(!show)}  >Demarrer</button>

      </div>
    
      <footer className="footer">

<p>Développé par <span  style={{color:"#D37E2B" }}>Randy Lele Talla</span>.</p>
    </footer>
     </div>
             ):<Main></Main>

            }
        </div>
        
    )
}

