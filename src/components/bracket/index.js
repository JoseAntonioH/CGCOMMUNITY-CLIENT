import * as React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./bracket.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useParams,useNavigate } from "react-router-dom";
import EditSemifinal from "../editTournament/editSemifinals";


const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;


 
function AddBracket(props) {
    const [tournament, setTournament] = useState(null);
    const {id}=useParams();
    const navigate = useNavigate();

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
        <div className="chart-tournament">
            <a className="tadd" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Champion
            </a>
            <a className="tadd" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Final
            </a>
            <a className="tadd" href="#popup5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Semifinal
            </a>

            <div id="popup5" class="overlay">
	                <div class="popup">
		                <h2>Edit Semifinals</h2>
		                <a class="close" href="#">×</a>
        
                        <EditSemifinal/>
		            </div>
	            </div>





            <>
                <Tree
                    lineWidth={'2px'}
                    lineColor={'purple'}
                    lineBorderRadius={'15px'}
                    label={<div><img className="troph" src="/images/trophy.png"/><p className="participant">{tournament?.champion}</p></div>}
                >
                    <TreeNode label={<div><img className="troph" src="/images/final.png"/><p className="participant">{tournament?.finalistone}</p></div>}>
                        <TreeNode label={<div><img className="troph" src="/images/Semifinal.png"/><p className="participant">{tournament?.semifinalistone}</p></div>} />
                        <TreeNode label={<div><img className="troph" src="/images/Semifinal.png"/><p className="participant">{tournament?.semifinalisttwo}</p></div>} />
                    </TreeNode>
                    <TreeNode label={<div><img className="troph" src="/images/final.png"/><p className="participant">{tournament?.finalisttwo}</p></div>}>
                        <TreeNode label={<div><img className="troph" src="/images/Semifinal.png"/><p className="participant">{tournament?.semifinalistthree}</p></div>} />
                        <TreeNode label={<div><img className="troph" src="/images/Semifinal.png"/><p className="participant">{tournament?.semifinalistfour}</p></div>} />
                    </TreeNode>
                </Tree>
            </>
        </div>
    );
}
 
export default AddBracket;