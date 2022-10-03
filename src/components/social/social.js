
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./socialstyle.css";



const API_URL = "http://localhost:5005";

function SocialMedia(props) {
    const [game, setGames] = useState([]);
    const{id}=useParams();
  
    const getAllGames = () => {
      axios
        .get(`${API_URL}/games/${id}`)
        .then((response) => setGames(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllGames();
    }, [] );

  return (

    <div className="social-component">
          
            <>

    

        <ul className="social-media">
            <li>
                <a className="youtube" href={game?.youtube} target="_blank">
                <img className="youtube-img" src="../images/youtube.png"/> 
                </a>
            </li>
            <li>
                <a className="instagram" href={game?.instagram} target="_blank">
                <img className="instagram-img" src="../images/instagram.png"/> 
                </a>
            </li>
            <li>
                <a className="facebook" href={game?.facebook} target="_blank">
                    <img className="facebook-img" src="../images/facebook.png"/> 
                </a>
    
            </li>
            <li>
                <a className="twitter" href={game?.twitter} target="_blank">
                    <img className="twitter-img" src="../images/twitter.png"/> 
                </a> 
            </li>
        </ul>
    
    </>

</div>
    
  );
}

export default SocialMedia;
