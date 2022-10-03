import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./gamesstyle.css";
import AddGame from "../../components/addGame";
//import AddGame from "../components/AddGame";


const API_URL = "http://localhost:5005";




function Games(){
    const [games, setGames] = useState([]);
    
  

    const getAllGames = () => {
      axios
        .get(`${API_URL}/games`)
        .then((response) => setGames(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllGames();
    }, [] );
    
    return (




        
        <div className="games-page">
          
	

    {games.map((game) => {
                return ( 
                    <div className="container-games" key={game._id} >
                    
                    <div class="card-games">
                        <div class="games-face face1">
                            <div class="content-games">           
                                <Link to={`/games/${game._id}`}>
                      <h3>{game.gameName}</h3>
                    </Link>
                            </div>
                        </div>
                        <div class="games-face face2">
                            <div class="content-games">
                                <img className="game-image" src={game.image}/>
                            </div>
                        </div>
                    </div>
                    </div>


                );
            })}     
             

<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Add Game</h2>
		<a class="close" href="#">×</a>

        
		<div class="content">
        <AddGame refreshGames={getAllGames}/>
		</div>
	</div>
   
                        

                        

                        </div>

                        <div className="container-games"  >
                    
                    <div className="card-games">
                        <div className="games-face face1">
                            <div className="content-games">           
                                
                      <a  href="#popup1"><h3>Add Game</h3></a>
                            </div>
                        </div>
                        

            </div>


                    </div>
                    
        </div>
    );
}


export default Games;