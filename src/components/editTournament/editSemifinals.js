import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./semifinals.css";


const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function EditSemifinal(props) {
    const [semifinalistone, setSemifinalistOne] = useState("");
    const [semifinalisttwo, setSemifinalistTwo] = useState("");
    const [semifinalistthree, setSemifinalistThree] = useState("");
    const [semifinalistfour, setSemifinalistFour] = useState("");
    const { id } = useParams();
    
    useEffect(() => {
        axios
        .get(`${API_URL}/games/tournaments/${id}`)
        .then((response) => {
            const oneSemifinal = response.data;
            setSemifinalistOne(oneSemifinal.semifinalistone);
            setSemifinalistTwo(oneSemifinal.semifinalisttwo);
            setSemifinalistThree(oneSemifinal.semifinalistthree);
            setSemifinalistFour(oneSemifinal.semifinalistfour);
        })
        .catch((error) => console.log(error));
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { semifinalistone,semifinalisttwo,semifinalistthree,semifinalistfour };

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
                        name="semifinalistone"
                        value={semifinalistone}
                        onChange={(e) => setSemifinalistOne(e.target.value)}
                    />
                    <label>Semifinalist</label>
                </div>

                <div className="usersign-box">
                    <input
                        type="text"
                        name="semifinalist"
                        value={semifinalisttwo}
                        onChange={(e) => setSemifinalistTwo(e.target.value)}
                    />
                    <label>Semifinalist</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="semifinalistthree"
                        value={semifinalistthree}
                        onChange={(e) => setSemifinalistThree(e.target.value)}
                    />
                    <label>Semifinalist</label>
                </div>

                <div className="usersign-box">
                    <input
                        name="semifinalistfour"
                        value={semifinalistfour}
                        onChange={(e) => setSemifinalistFour(e.target.value)}
                    />
                    <label>Semifinalist</label>
                </div>
    
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update Semifinalists
                </button>
            </form> 
        </div>
    );
}

export default EditSemifinal;