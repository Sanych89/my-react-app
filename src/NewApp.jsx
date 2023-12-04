import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './mainstyle.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import MainScreen from './components/Mainscreen/MainScreen';
import TrainerStr from './components/TrainingPlans/Trainers/TrainerSTR';
import { Routes, Route} from 'react-router-dom';

import ReviewsContainer from './components/Reviews/reviewsContainer';
import MyCabContainer from './components/Mainscreen/MyCab/myCabContainer';
import TrainingPlansConainer from './components/TrainingPlans/TrainingPlansContainer';

import UsersContainer from './components/Users/UsersContainer';
import Shop from './components/Shop/Shop';




function NewApp(props) {
  
    
    return (
    
      <div className='app-wrapper'>  
        <Header />
        <Nav /> 
        <div class='mainScreenDisplay'> 
        <Routes> 
          <Route path="/" element= {<MainScreen />}/>   
          <Route path="/Mainscreen" element= {<MainScreen  /> }/>                   
          <Route path="/TrainingPlans" element= {<TrainingPlansConainer />} /> 
          <Route path="/MyCab/*"
                    element= {<MyCabContainer                    />}/>   
          <Route path="/TrainingPlans/strenght" element= {<TrainerStr/>}/>
          <Route path="/Reviews" 
          element= {<ReviewsContainer               
          />  /*передаем в пропсы к ревью компоненту и пропсы с пост пейдж и пропс с функцией */
          } />
          <Route path="/Users" 
          element = {<UsersContainer/>} />
          <Route path="/Shop" 
          element = {<Shop/>} />
        </Routes>         
        </div> 
        
      </div>
      
    );
    }
    

    export default NewApp
    
//navPageTrainers={props.state.navPage.navPageTrainers}
    //trainingDataMessages={props.state.trainingPage.trainingDataMessages} trainingData={props.state.trainingPage.trainingData}