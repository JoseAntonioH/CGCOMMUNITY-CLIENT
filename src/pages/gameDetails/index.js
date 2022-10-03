import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams,useNavigate } from "react-router-dom";
import "./detailsstyle.css";
import SocialMedia from "../../components/social/social";
//import AddGame from "../components/AddGame";


const API_URL = "http://localhost:5005";




function GameDetails(props){
    const [games, setGame] = useState(null);
    const {id}=useParams();
    const navigate = useNavigate();
    
  

    const deleteGame = () => {

        // Make a DELETE request to delete the project
        axios
          .delete(`${API_URL}/games/${id}`)
          .then(() => {
            // Once the delete request is resolved successfully
            // navigate back to the list of projects.
            navigate("/games");
          })
          .catch((err) => console.log(err));
      };

    const getGame = () => {
      axios
        .get(`${API_URL}/games/${id}`)
        .then((response) => {
            const oneGame=response.data;
            setGame(oneGame);
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getGame();
    }, [] );
    
    return (
        
        <div>
            <a  href="#popup1"><img className="trashcan" src="../images/trashcan.png"/></a>
            <Link  to={`/games/edit/${games?._id}`}><img className="trashcan" src="../images/edit.png"/></Link>
        
        <div className="gamedetails-page">
             
             <div id="popup1" class="overlay">
	<div class="popup">
  
        
        
		<h2>Are you sure to delete this Game?</h2>
        
       
		<a class="close" href="#">×</a>
        
        <button className="excelentbutton" onClick={deleteGame}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Delete Game</button>
        
        
		
		</div>

        

	</div>

    
            
            {games &&(
                <>
                <ul class="cards">
                    <li>
                        <a href="" class="card">
                        <img src={games.image} class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                <img class="card__thumb" src={games?.icon}  alt="" />
                                <div class="card__header-text">
                                    <h3 class="card__title">{games?.gameName}</h3>            
                                    
                                </div>
                               
                            </div>
                            <div className="game-info">
                                <p><span><img className="img-platform" src="../images/platform.png"/>: {games?.platforms}</span></p>
                                <p><span><img className="img-genre" src="../images/genre.png"/>: {games?.genre}</span></p>
                            </div>
                            
                        </div>
                        </a>      
                    </li>
                    
                <li>
                {games && 
                    games.tournament.map((tournament)=>(
                    <div className="columns-extra" key={tournament._id}>  
                    <div className="column-tournaments" >
                    
                    
                    <p>{tournament.tournamentName}</p>
                    </div>
                    <div className="column-social">
                    <p>{tournament.description}</p>
                    </div>
                    </div> 
                    
                    ))
                }

                {games && 
                    games.social.map((social)=>(
                    <div className="columns-extra" key={social._id}>  
                    <div className="column-tournaments" >
                    
                    
                    <p>{social.userName}</p>
                    </div>
                    <div className="column-social">
                    <p>{social.description}</p>
                    </div>
                    </div> 
                    ))
                }
                </li>
                
                </ul>
                
                <h3 class="card__title">{games?.tournament.tournamentName}</h3> 
                </>
            )}
            <SocialMedia/>
            
            
        </div>
        </div>

    );
}


export default GameDetails;