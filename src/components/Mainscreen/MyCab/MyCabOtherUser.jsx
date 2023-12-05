import React from "react";
import classes from "./MyCab.module.css";

function MyCabOtherUser(props) {
  return (
    <div>   
    <div>
      Имя пользователя: {props.profile.fullName}
    </div>         
    <div className={classes.otherUserImg}>
    <img src={props.profile.photos.large} alt='А фото нет ('></img>    
    </div>
  </div>
  );
}

export default MyCabOtherUser;
