import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./final.css";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function EditFinal(props) {
    const [finalistone, setFinalistOne] = useState("");
    const [finalisttwo, setFinalistTwo] = useState("");
    const { id } = useParams();
   
    useEffect(() => {
        axios
        .get(`${API_URL}/games/tournaments/${id}`)
        .then((response) => {
            const oneFinal = response.data;
            setFinalistOne(oneFinal.finalistone);
            setFinalistTwo(oneFinal.finalisttwo);         
        })
        .catch((error) => console.log(error));
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { finalistone,finalisttwo };

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
                        name="finalistone"
                        value={finalistone}
                        onChange={(e) => setFinalistOne(e.target.value)}
                    />
                    <label>Finalist</label>
                </div>

                <div className="usersign-box">
                    <input
                        type="text"
                        name="finalisttwo"
                        value={finalisttwo}
                        onChange={(e) => setFinalistTwo(e.target.value)}
                    />
                    <label>Finalist</label>
                </div>

                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update Finalists
                </button>
            </form>
        </div>
    );
}

export default EditFinal;