import React from 'react';
import './MyCab.module.css';
import MyCabStat from './Mystat/MyCabStat';
import MyCabOtherUser from './MyCabOtherUser'
import classes from './MyCab.module.css'
import Preloader from '../../Common/preloader';
import { NavLink, Navigate, redirect } from 'react-router-dom';
import ProfileStatus from './Mystat/ProfileStatusPage'
import MyCabReduxForm from './MyCabForm';







function MyCab(props) {

  

  const onSubmit = (formData) => {
    console.log(formData)
   
    


}


  
 
  if (props.isAuth == false) return <Navigate to ={"/Login"}/>

  
  let likeCountText = React.createRef();  
  
  let myCabTextJSX = props.info.myCabLikeCount.map (el => <MyCabLike count={el.count}/>); 


let updateLikesToCab = () => {
  let count = likeCountText.current.value;
  props.updateLikesToCab(count);    
}  

let addClubAge = () => {
  props.addClubAge(); 
}

if (!props.info.profile) {
  return <Preloader/>
}



  return (
        
        <div className={classes.MyCabMain}>   
        <span>
        
          Личный кабинет        
        <MyCabStat avname="Sanych" clubAge='34'/>
        <ProfileStatus status={props.status} udpateUserStatus = {props.udpateUserStatus}  />

        <button onClick={addClubAge}> Лет в клубе </button>  
        <p> Уже: {props.info.newtrueLikeCount}</p>
        

          
        <textarea onChange= {updateLikesToCab} ref={likeCountText}  value={props.info.newMyCabLikeCount}>  </textarea>
        
        <MyCabReduxForm onSubmit={onSubmit}/>

        <p> Количество 1: {props.info.newMyCabLikeCount} </p>
        
        <p> { myCabTextJSX } </p>
        
        </span>
            
        <div>
          
          Страница просматриваемого пользователя: 
          <div> <MyCabOtherUser profile={props.info.profile} status={props.status}/>    
   
    </div>
  </div>
          </div>  

       
  )
}

function MyCabLike(props) {
  let addLikesToCab = () => {                    
    props.dispatch({type: 'ADDLIKESTOCAB' })         
      } 
}

export default MyCab

//           