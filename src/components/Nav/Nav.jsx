import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


function Nav(props) {
  
  
    return (
    <nav className={classes.nav}> 
    <div>Page</div>
    <p> </p>
    <NavList /> 
  
  
    

  </nav>
  )
}

function NavList(props) {



return (
  <div >
  <div className={classes.item}>
  <NavLink to="/Mainscreen" className= { navData => navData.isActive ? classes.active : classes.item }> Стартовая страница </NavLink>       
</div>
<div className={classes.item}> 
<NavLink to="/TrainingPlans" className =  { navData => navData.isActive ? classes.active : classes.item }> Планы тренировок </NavLink> 
</div>
<div className={classes.item}> 


<NavLink to="/MyCab" className = {  navData => navData.isActive ? classes.active : classes.item  }> Мой кабинет </NavLink> 
</div>
<div className={classes.item}> 

<NavLink to="/Reviews" className = {  navData => navData.isActive ? classes.active : classes.item  }> Отзывы </NavLink> 
</div>
<div className={classes.item}> 

<NavLink to="/Users" className = {  navData => navData.isActive ? classes.active : classes.item  }> Члены клуба </NavLink> 
</div>
<div className={classes.item}> 

<NavLink to="/Shop" className = {  navData => navData.isActive ? classes.active : classes.item  }> Магазин </NavLink> 
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