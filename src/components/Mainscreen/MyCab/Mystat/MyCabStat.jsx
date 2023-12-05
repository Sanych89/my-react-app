import React from "react";
import "./MyCabStat.module.css";
import classes from "./MyCabStat.module.css";

function MyCabStat(props) {
  return (
    <>
      <div className={ classes.item }>
        <img
          src="https://cdn.pixabay.com/photo/2012/04/18/15/20/nurse-37322_640.png"
          alt=""
        />
        { props.avname } { props.clubAge } 
      </div>
    </>
  );
}

export default MyCabStat;
