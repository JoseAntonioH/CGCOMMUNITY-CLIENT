
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Profile from "../../pages/profile";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";



 
const API_URL = "http://localhost:5005";

 
function AddSocial(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  
  
  const navigate = useNavigate();
 

  
    


  const handleSubmit = (e) => {                       
    e.preventDefault();
    const { userId } = props;
    const { gameId } = props;
    
 
    const requestBody = { userId,title,date,description,gameId };
    axios
      .post(`${API_URL}/games/social`, requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDate("");
        setDescription("");
        
        props.refreshSocial();
      })
      .catch((error) => console.log(error));
  };


 
  return (
    <div className="addT-box">
      <form onSubmit={handleSubmit} className="signup__form">
      <div className="user-box">
        

      {props.user ? (
          <>
            <input
          type="text"
          name="userName"
          placeholder={props.user.username}
          
          required
        />
        <label>User</label>
          </>
        ) : (
          <>
          
          </>
        )}





        
        
        </div>

        <div className="user-box">

        <input
            id="input-image"
            type="text"
            name="date"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <label>Title</label>
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


      
 
        <button className="button__submit" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add Post
        </button>
      </form>
    </div>
  );
}
 
export default AddSocial;