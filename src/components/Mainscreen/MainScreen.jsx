import React from 'react';
import ReactDOM from 'react-dom/client';
import './MainScreen.css';
import sila from './img/sila.jpeg';
import zal from './img/zal.jpeg';
import MyCab from './MyCab/MyCab';




function MainScreenImage() {
  return (
    <div>    
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbs5AtBLFTxJ3Dbgz6qjhR_BSP-7sRXXyJw&usqp=CAU'/>  
  </div>
  )
}

function SubScreenImage() {
  return (
    <div>
    <picture>
      <source srcset={sila} media='(max-width: 575px)' type='image/jpeg'/>
      <img src={zal} alt="Изображение зала"/>          
    </picture>
    </div>
  )
}

function MainScreen(props) {
    return (
        <div className='MainScreen'>  
        <div> 
        < MainScreenImage />
        < SubScreenImage />
       

        
       
      </div>
      
      
      </div>
  )
}

export default MainScreen