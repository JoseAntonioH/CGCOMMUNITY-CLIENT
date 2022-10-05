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
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
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
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
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
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    )
}



export default Feautures;