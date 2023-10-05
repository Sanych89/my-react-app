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



function NewApp(props) {
    
    return (
    <BrowserRouter>
      <div className='app-wrapper'>  
        <Header />
        <Nav />
        <div class='mainScreenDisplay'> 
        <Routes> 
          <Route path="/" element= {<MainScreen />}/>   
          <Route path="/Mainscreen" element= {<MainScreen /> }/>                   
          <Route path="/TrainingPlans" element= {<TrainingPlans trainingDataMessages={props.state.trainingDataMessages} trainingData={props.state.trainingData}/>}/>          
          <Route path="/MyCab" element= {<MyCab otherProp={props.testPropvar}/>}/>   
          <Route path="/TrainingPlans/strenght" element= {<TrainerStr/>}/>
        </Routes>         
        </div> 
        
      </div>
      </BrowserRouter>
    );
    }
    

    export default NewApp
    