import React from "react";
import ReactDOM from "react-dom/client";
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
      {/*<div className={classes.item}>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png"
          alt=""
        />
        {props.name}
      </div>
      <div className={classes.item}>
        <img
          src="https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_640.jpg"
          alt=""
        />
        Content3
  </div> */}
    </>
  );
}

export default MyCabStat;
