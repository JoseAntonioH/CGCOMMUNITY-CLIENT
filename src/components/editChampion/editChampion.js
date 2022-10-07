import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function EditChampion(props) {
    const [champion, setChampion] = useState("");
    const { id } = useParams();
   
    useEffect(() => {
        axios
        .get(`${API_URL}/games/tournaments/${id}`)
        .then((response) => {
            const oneChampion = response.data;
            setChampion(oneChampion.champion);
        })
        .catch((error) => console.log(error));
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { champion };

        axios
            .put(`${API_URL}/games/tournaments/${id}`, requestBody)
            .then((response) => {
            props.refreshTournament();
        });
    };

    return (
        <div className="add-box" >
            <form onSubmit={handleFormSubmit}>

                <div className="usersign-box">       
                    <input
                        type="text"
                        name="finalisttwo"
                        value={champion}
                        onChange={(e) => setChampion(e.target.value)}
                    />
                    <label>Champion</label>
                </div>

                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update Champion
                </button>
            </form>      
        </div>
    );
}

export default EditChampion;