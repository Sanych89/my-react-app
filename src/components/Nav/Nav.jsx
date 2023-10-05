import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
    <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/Mainscreen" className= { navData => navData.isActive ? classes.active : classes.item }> Main Screen</NavLink>       
    </div>
    <div className={classes.item}> 
    <NavLink to="/TrainingPlans" className =  { navData => navData.isActive ? classes.active : classes.item }> Training Plans</NavLink> 
    </div>
    <div className={classes.item}> 
    
    <NavLink to="/Products" className = {  navData => navData.isActive ? classes.active : classes.item  }> Products </NavLink> 
    </div>
    <div className={classes.item}> 
    
    <NavLink to="/MyCab" className = {  navData => navData.isActive ? classes.active : classes.item  }> My Cabinet </NavLink> 
    </div>
  </nav>
  )
}

export default Nav