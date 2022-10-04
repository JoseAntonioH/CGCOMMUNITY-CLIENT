import React from "react";



const Profile = (props) => {
    return (
      <div className="navbar">
       
  
        
          {props.user ? (
            <>
             <p>{props.user.username}</p>
             <p>{props.user.email}</p>
             <p>{props.user.completeName}</p>
            </>
          ) : (
            <>
           
            </>
          )}
        
      </div>
    );
  };


export default Profile;