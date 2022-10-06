
import React from "react";
import { useState, useEffect } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import "./detailsTournaments.css";
import TournamentChart from "../../components/bracket";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function DetailsTournament(props) {
    const [tournament, setTournament] = useState(null);
    const {id}=useParams();
    const navigate = useNavigate();
    
  

    const deleteTournament = () => {

        // Make a DELETE request to delete the project
        axios
          .delete(`${API_URL}/games/tournaments/${id}`)
          .then(() => {
            // Once the delete request is resolved successfully
            // navigate back to the list of projects.
            navigate("/games");
          })
          .catch((err) => console.log(err));
      };

    const getTournament = () => {
        axios
            .get(`${API_URL}/games/tournaments/${id}`)
            .then((response) => {
                const oneTournament=response.data;
                setTournament(oneTournament);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getTournament();
    });

    return (

        <div>
            <a  href="#popup1"><img className="trashcan" src="/images/trashcan.png"/></a>
            
            <div id="popup1" class="overlay">
	            <div class="popup">
		            <h2>Are you sure to delete this Tournament?</h2>
		            <a class="close" href="#">×</a>
        
                    <button className="goodbutton" onClick={deleteTournament}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Delete Tournament</button>
		        </div>
	        </div>

            <div className="detailT">
            <>
        
            <div class="blog">
  
                <div class="title-box">
                    <h3>
                        {tournament?.tournamentName}
                    </h3>
                    <hr/>
                    <div class="intro">
                        Prize: ${tournament?.prize}
                    </div>
                </div>  
                <div class="info">
                    <span>{tournament?.description}</span>
                    
                </div>
                <div class="footer">
                    <div class="icon-holder">
                        <span>
                            <i class="fa fa-comment-o"></i>
                            <space></space>
                            <i class="fa fa-calendar"></i>
                            <span>{tournament?.date}</span>
                        </span>
                    </div>
                </div>
  
                <div class="color-overlay"></div>
            </div>
            </>
            <div className="t-box">
            <TournamentChart/>
            </div>
            </div>

        </div>
    );
}
    

export default DetailsTournament;
