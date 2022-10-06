import { useState } from "react";
import axios from "axios";
 
const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;


function AddSocial(props) {
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {                       
        e.preventDefault();
   
        const { gameId } = props;
    
        const requestBody = { user,title,date,description,gameId };
        axios
            .post(`${API_URL}/games/social`, requestBody)
            .then((response) => {
                setUser("");
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
                <input
                    id="input-image"
                    type="text"
                    name="user"
                    placeholder=""
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                <label>User</label>
            </div>

            <div className="user-box">
                <input
                    id="input-image"
                    type="text"
                    name="title"
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

            <div className="user-box">
                <input
                    type="text"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <label>Date</label>
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