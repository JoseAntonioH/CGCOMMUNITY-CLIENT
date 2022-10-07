import React from "react";
import "./style.css";


function Feautures(){
    return (            
        <div className="feautures">
            <div className="welcome-feautures">
                <p>WELCOME TO OUR COMMUNITY!!!</p>
            </div>
            
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <i class="fab fa-windows"></i>            
                            <h3>GAMES</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>"Create a library of games for each commmunity and attractr more gamers"</p>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <i class="fab fa-android"></i>               
                            <h3>TOURNAMENTS</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>"Create tournaments to put your skills to the test and look who is the best"</p>
                        </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <i class="fab fa-apple"></i>
                            <h3>SOCIAL</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>"Create posts to look for playing partners, just to have a good time or to improve your skills"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default Feautures;