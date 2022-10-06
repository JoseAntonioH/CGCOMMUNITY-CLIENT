
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./addTournament.css";


 
const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;


 
function AddTournament(props) {
  const [tournamentName, setTournamentName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  
  const navigate = useNavigate();
 

  
    


  const handleSubmit = (e) => {                       
    e.preventDefault();

    const { gameId } = props;
 
    const requestBody = { tournamentName,date,description,prize,gameId };
    axios
      .post(`${API_URL}/games/tournaments`, requestBody)
      .then((response) => {
        // Reset the state
        setTournamentName("");
        setDate("");
        setDescription("");
        setPrize("");
        props.refreshTournaments();
      })
      .catch((error) => console.log(error));
  };


 
  return (
    <div className="addT-box">
      <form onSubmit={handleSubmit} className="signup__form">
      <div className="user-box">
        
        <input
          type="text"
          name="tournamentName"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
          required
        />
        <label>Tournament Name</label>
        </div>

        <div className="user-box">
        
        <input
            id="input-image"
            type="text"
            name="date"
            placeholder=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
        />
        <label>Date</label>
        </div>


        <div className="user-box">
        
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Description</label>
        </div>


        <div className="user-box">
        
        <input
          type="text"
          name="prize"
          value={prize}
          onChange={(e) => setPrize(e.target.value)}
          required
        />
        <label>Prize</label>
        </div>
 
        <button className="button__submit" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add Tournament
        </button>
        </form>
    </div>
  );
}
 
export default AddTournament;