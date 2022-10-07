import React from "react";
import { useState } from "react";
import axios from "axios";
import "./addGame.css";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function AddGame(props) {
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
    
    const handleSubmit = (e) => {                       
        e.preventDefault();
 
        const requestBody = { gameName, image, genre, platforms, twitter, instagram, youtube,facebook,icon,developer };
        axios
        .post(`${API_URL}/games`, requestBody)
        .then((response) => {
            setGameName("");
            setImage("");
            setGenre("");
            setPlatforms("");
            setTwitter("");
            setInstagram("");
            setYoutube("");
            setFacebook("");
            setIcon("");
            setDeveloper("");
            props.refreshGames();
        })
        .catch((error) => console.log(error));
    };

    return (
        <div className="add-box">
            <form onSubmit={handleSubmit} className="signup__form">
            
            <div className="user-box">
                <input
                    type="text"
                    name="gameName"
                    placeholder=""
                    value={gameName}
                    onChange={(e) => setGameName(e.target.value)}
                    required
                />
                <label>Title</label>
            </div>

            <div className="user-box">
                <input
                    id="input-image"
                    type="text"
                    name="image"
                    placeholder=""
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <label>Image</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="genre"
                    placeholder=""
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                <label>Genre</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="platforms"
                    placeholder=""
                    value={platforms}
                    onChange={(e) => setPlatforms(e.target.value)}
                    required
                />
                <label>Platforms</label>
            </div>

            <div className="user-box"> 
                <input
                    type="text"
                    name="twitter"
                    placeholder=""
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    required
                />
                <label>Twitter</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="instagram"
                    placeholder=""
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    required
                />
                <label>Instagram</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="youtube"
                    placeholder=""
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                    required
                />
                <label>Youtube</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="facebook"
                    placeholder=""
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    required
                />
                <label>Facebook</label>
            </div>

            <div className="user-box">
                <input
                    type="text"
                    name="icon"
                    placeholder=""
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    required
                />
                <label>Icon</label>
            </div>
 
            <button className="button__submit" type="submit" to="/games">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Game
            </button>
            </form>
        </div>
    );
}
 
export default AddGame;