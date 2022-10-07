import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./editGames.css";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

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
            setGenre(oneGame.genre);
            setPlatforms(oneGame.platforms);
            setTwitter(oneGame.twitter);
            setInstagram(oneGame.instagram);
            setYoutube(oneGame.youtube);
            setFacebook(oneGame.facebook);
            setIcon(oneGame.icon);
            setDeveloper(oneGame.developer);
        })
        .catch((error) => console.log(error));
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { gameName, image, genre, platforms, twitter,instagram,youtube,facebook,icon,developer };

        axios
            .put(`${API_URL}/games/${id}`, requestBody)
            .then((response) => {
            navigate(`/games/${id}`);
        });
    };

    return (
        <div className="editProjectPage">
            <h1>Edit Game</h1>

            <form onSubmit={handleFormSubmit}>

                <div className="usersign-box">
                    <input
                        type="text"
                        name="gameName"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        required
                    />
                    <label>Title</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <label>Image</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                    <label>Genre</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="platforms"
                        value={platforms}
                        onChange={(e) => setPlatforms(e.target.value)}
                        required
                    />
                    <label>Platforms</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        required
                    />
                    <label>Twitter</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        required
                    />
                    <label>Instagram</label>
                </div>

                <div className="usersign-box">  
                    <input
                        name="youtube"
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                        required
                    />
                    <label>Youtube</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        required
                    />
                    <label>Facebook</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="icon"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                        required
                    />
                    <label>Icon</label>
                </div>

                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update Game
                </button>
            </form>
        </div>
    );
}

export default EditGames;