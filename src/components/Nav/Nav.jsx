import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


function Nav(props) {
  
  
    return (
    <nav className={classes.nav}> 
    <div>Page</div>
    <p> </p>
    <NavList /> 
  
    <NavFooter navPageTrainers = {props.navPageTrainers } />
    

  </nav>
  )
}

function NavList(props) {



return (
  <div >
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
<div className={classes.item}> 

<NavLink to="/Reviews" className = {  navData => navData.isActive ? classes.active : classes.item  }> Отзывы </NavLink> 
</div>
</div>
)
}

function NavFooter(props) {
  let trainersNavBarJSX = props.navPageTrainers.map (el => <NavFooterTrainer trainerRealName={el.trainerRealName} trainerImgUrl={el.trainerImgUrl} trainerId={el.id}/>); 
  
  return (
    <div className = {classes.NavFooter}>
      <div className={classes.itemNavFooter}>
        { trainersNavBarJSX }
      </div>
    </div>
  )
}

function NavFooterTrainer(props) {
  return ( 
    <div>  
    <p> {props.trainerRealName}</p> 
         
    <img
          src={props.trainerImgUrl}
          alt="Аватар"
        />
    


    </div>
    )  
}

export default Nav