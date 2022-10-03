import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditGames(props) {
    const [gameName, setGameName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [platforms, setPlatforms] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");
    const [facebook, setFacebook] = useState("");
    const [icon, setIcon] = useState("");
    const [developer, setDeveloper] = useState("");
    
   

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/games/${id}`)
      .then((response) => {
        const oneGame = response.data;
        setGameName(oneGame.gameName);
        setImage(oneGame.image);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { gameName, image };

    axios
      .put(`${API_URL}/games/${id}`, requestBody)
      .then((response) => {
        navigate(`/games/${id}`);
      });
  };

  

  return (
    <div className="EditProjectPage">
      <h3>Edit Game</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Update Project</button>
      </form>

      
    </div>
  );
}

export default EditGames;