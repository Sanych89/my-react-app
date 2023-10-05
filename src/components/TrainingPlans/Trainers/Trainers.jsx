import React from 'react';
import ReactDOM from 'react-dom/client';
import './../TrainingPlans.module.css';
import classes from './../TrainingPlans.module.css'
import { NavLink } from 'react-router-dom';


function Trainer (props) {
  return (
  <div className={classes.trainer}>            
  <NavLink to={"/TrainingPlans/" + props.trainerUrl} > {props.trainerName} </NavLink>
  
  </div>
  )
}



export default Trainer
