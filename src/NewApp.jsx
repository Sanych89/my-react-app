import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './mainstyle.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import MainScreen from './components/Mainscreen/MainScreen';
import TrainingPlans from './components/TrainingPlans/TrainingPlans';
import TrainerStr from './components/TrainingPlans/Trainers/TrainerSTR';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import MyCab from './components/Mainscreen/MyCab/MyCab';
import ReviewsContainer from './components/Reviews/reviewsContainer';
import MyCabContainer from './components/Mainscreen/MyCab/myCabContainer';



function NewApp(props) {
  
    
    return (
    
      <div className='app-wrapper'>  
        <Header />
        <Nav navPageTrainers={props.state.navPage.navPageTrainers}  />
        <div class='mainScreenDisplay'> 
        <Routes> 
          <Route path="/" element= {<MainScreen />}/>   
          <Route path="/Mainscreen" element= {<MainScreen 
          info={props.state.myCabPage}
          /> }/>                   
          <Route path="/TrainingPlans" element= {<TrainingPlans trainingDataMessages={props.state.trainingPage.trainingDataMessages} trainingData={props.state.trainingPage.trainingData}/>}/>          
          <Route path="/MyCab"
                    element= {<MyCabContainer
                       
                    store={props.store}              

                    />}/>   
          <Route path="/TrainingPlans/strenght" element= {<TrainerStr/>}/>
          <Route path="/Reviews" 
          element= {<ReviewsContainer store={props.store}              
          />  /*передаем в пропсы к ревью компоненту и пропсы с пост пейдж и пропс с функцией */
          } />
        </Routes>         
        </div> 
        
      </div>
      
    );
    }
    

    export default NewApp
    