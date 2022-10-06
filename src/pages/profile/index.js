import React from "react";
import "./profile.css";



const Profile = (props) => {
    return (
        <div>

<div class="Pcontainer">
    
    <div class="Pcard-wrapper">
      
      <div class="Pcard">
        
        <div class="Pcard-image">
          <img className="profPic" src={props.user.profilePic} alt="profile one"/>
        </div>

        <ul className="Psocial-media">
            <li>
                <a className="youtube" href={props.user.youtube} target="_blank">
                <img className="youtube-img" src="../images/youtube.png"/> 
                </a>
            </li>
            <li>
                <a className="instagram" href={props.user.instagram} target="_blank">
                <img className="instagram-img" src="../images/instagram.png"/> 
                </a>
            </li>
            <li>
                <a className="facebook" href={props.user.facebook} target="_blank">
                    <img className="facebook-img" src="../images/facebook.png"/> 
                </a>
    
            </li>
            <li>
                <a className="twitter" href={props.user.twitter} target="_blank">
                    <img className="twitter-img" src="../images/twitter.png"/> 
                </a> 
            </li>
        </ul>

      <div class="details"> 
        <h2>User:  {props.user.username}
          <br/>
          <span class="job-title">Complete Name:{props.user.completeName}</span>
          <br/>
          <span class="job-title">Age:{props.user.age}</span>
          <br/>
          <span class="job-title">E-mail: {props.user.email}</span>
        </h2>
      </div>
    </div>
  </div>
    
    
     
 </div>
      
      </div>
    );
  };


export default Profile;