import React from 'react'
import Start from './Start';


export default function Score(props) {
    const [show, setShow] = React.useState(true);
    const [save, setSave] = React.useState(true);
 




    return (

      
        <div>
            {
            show ? (

                <div>
             <header >
        <h1 className="logo main">Quizzer</h1>
          
     
        </header>

        <div className="container game">
        


       <div className="card scd first" >
         <div className="content">
           <h3 className="score-txt" style={{marginTop:"30px"}}>Score</h3>
         <div className="nbr-qst score">{props.score}</div>
       
         

        <div className="container-content" >
        <div classN="rep-box">
          
       
                      <div className={props.score === 10 ? "qst obs" : "undisplay"} >{props.score === 10 ? "Excellent !": ""}</div>
                      <div className={props.score <= 0 ? "qst obs" : "undisplay"} >{props.score <= 0 ? "Nul !": ""}</div>
                      <div className={props.score > 0 && props.score < 5 ? "qst obs" : "undisplay"} >{props.score > 0 && props.score < 5 ? "Peut mieux faire !": ""}</div>
                      <div className={props.score > 4 && props.score < 8 ? "qst obs" : "undisplay"} >{props.score > 4 && props.score < 8 ? "Bien !": ""}</div>
                      <div className={props.score > 7 && props.score < 10 ? "qst obs" : "undisplay"} >{props.score > 7 && props.score < 10 ? "Tres Bien !": ""}</div>

               
           
        <button className="btn-main" style={{backgroundColor:"#495760", borderColor:"#495760", marginTop:"70px", fontSize:"18px"}} onClick={()=> window.location.reload(false)}>Rejouer</button>
        
        <button className="rep opt undisplay">Partager</button>
        <h3 className="score-txt enregistrer undisplay" >{"Enregistrer"}</h3>

       
        <div className="save undisplay" style={{textAlign: "center"}}>
          <input className={save ? "rep twitter" : "undisplay"} placeholder="@twitter"  ></input>
         <button className="rep opt envoye" onClick={()=> setSave(false)} >{ save ? "Envoyer" : "Envoyé !"}</button>
        </div>
        </div>
        </div>
        </div>
       </div>
       <h2 className="classement-txt undisplay">Classement</h2>
       <table className="card classement undisplay" >
         <tr>
             <td className="num">1</td>
             <td >@rvndy_lt</td>
             <td >9/10</td>
         </tr>
         <tr>
           <td className="num">2</td>
             <td >@vndymlt</td>
             <td >7/10</td>
         </tr>
         <tr>
           <td className="num">3</td>
           <td >@ndrvhhhytbggggg</td>
           <td >5/10</td>
       </tr>
       <tr>
         <td className="num">4</td>
         <td >@ltrvndp_</td>
         <td >4/10</td>
     </tr>
      </table>

     


       </div>


       <footer className="footer" >
 
 <p>Développé par <span style={{color:"#D37E2B" }}>Randy Lele Talla</span>.</p>
      </footer>

      </div>

            ):<Start></Start> 
            }

        </div>
    )
}
