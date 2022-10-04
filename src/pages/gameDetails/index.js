import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams,useNavigate } from "react-router-dom";
import "./detailsstyle.css";
import SocialMedia from "../../components/social/social";
import AddTournament from "../../components/addTournament";


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

                <p className="t-text">Tournaments</p>
                <p className="s-text">SOCIAL</p>
            
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
                <div className="extra">
                <div className="column-tournaments" >
                {games && 
                    games.tournament.map((tournament)=>(
                    <div className="columns-extra" key={tournament._id}>  
                    
                    
                    
                        
                    <Link className="link-tournament" to={`/games/tournaments/${tournament._id}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {tournament.tournamentName}
                    </Link>
                    
                    
                    
                    </div>
                    
                    
                    ))
                }
                </div> 
                <div className="column-social" >
                {games && 
                    games.social.map((social)=>(
                     
                    <div className="" key={social._id}>
                    
                    
                    <p>{social.userName}</p>
                    
                    
                    <p>{social.description}</p>
                    
                    </div> 
                    ))
                }
                </div>
                </div>
                </li>
                
                </ul>
                
                
                </>
            )}
            <SocialMedia/>

            <div className="container-tourn"  >
                    
                <div className="card-games">
                    <div className="games-face face1">
                        <div className="content-games">                     
                            <a  href="#popup3"><h3>Add Tournament</h3></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="popup3" class="overlay">
	            <div class="popup">
		            <h2>Add Tournament</h2>
		            <a class="close" href="#">×</a>
		            <div class="content">
                        <AddTournament refreshTournaments={getGame} gameId={id}/>
		            </div>
	            </div>
            </div>

            <div className="container-social"  >
                    
                <div className="card-games">
                    <div className="games-face face1">
                        <div className="content-games">                     
                            <a  href="#popup4"><h3>Add Social</h3></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="popup4" class="overlay">
	            <div class="popup">
		            <h2>Add Post</h2>
		            <a class="close" href="#">×</a>
		            <div class="content">
                        
		            </div>
	            </div>
            </div>
            


        </div>
        </div>

    );
}


export default GameDetails;