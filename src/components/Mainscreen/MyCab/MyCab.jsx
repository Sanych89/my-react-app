import React from 'react';
import './MyCab.module.css';
import MyCabStat from './Mystat/MyCabStat';
import classes from './MyCab.module.css'
import Preloader from '../../Common/preloader';







function MyCab(props) {
 

  
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
        <MyCabStat avname="Marsik" clubAge='8' />

        <button onClick={addClubAge}> Лет в клубе </button>  
        <p> Уже: {props.info.newtrueLikeCount}</p>
        

              
        
        
        <textarea onChange= {updateLikesToCab} ref={likeCountText}  value={props.info.newMyCabLikeCount}>  </textarea>
        <p> Количество 1: {props.info.newMyCabLikeCount} </p>
        
        <p> { myCabTextJSX } </p>
        
        </span>
            
        <div>
          
          Страница просматриваемого пользователя:          
          <div className={classes.otherUserImg}>            
            <img src={props.info.profile.photos.large} ></img>
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