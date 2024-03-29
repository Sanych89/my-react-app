import React, { useState }  from 'react';
import './mainstyle.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav';
import MainScreen from './components/Mainscreen/MainScreen';
import TrainerStr from './components/TrainingPlans/Trainers/TrainerSTR';
import { Routes, Route} from 'react-router-dom';
import ReviewsContainer from './components/Reviews/reviewsContainer';
import MyCabContainer from './components/Mainscreen/MyCab/myCabContainer';
import TrainingPlansConainer from './components/TrainingPlans/TrainingPlansContainer';
import UsersContainer from './components/Users/UsersContainer';
import ShopPageContainer from './components/Shop/shopPageContainer';
import Login from './components/Login/login';
import { getAuthData } from './redux/authreducer';
import { connect } from 'react-redux';




class NewApp extends React.Component {  
  
  componentDidMount() {
    this.props.getAuthData();
}

  
  render() {
    return (    
      <div className='app-wrapper'>  
        <HeaderContainer />
        <Nav /> 
        <div class='mainScreenDisplay'> 
        <Routes> 
          <Route path="/" element= {<MainScreen />}/>   
          <Route path="/Mainscreen" element= {<MainScreen  /> }/>                   
          <Route path="/TrainingPlans" element= {<TrainingPlansConainer />} /> 
          <Route path="/MyCab/:id" element={<MyCabContainer/>}/>
          <Route path="/MyCab/" element={<MyCabContainer/>}/>             
          <Route path="/TrainingPlans/strenght" element= {<TrainerStr/>}/>
          <Route path="/Reviews" 
          element= {<ReviewsContainer               
          />  /*передаем в пропсы к ревью компоненту и пропсы с пост пейдж и пропс с функцией */
          } />
          <Route path="/Users" 
          element = {<UsersContainer/>} />
          <Route path="/Shop" 
          element = {<ShopPageContainer/>} />
          <Route path = "/Login" element = {<Login/>} /> 
        </Routes>         
        </div>         
      </div>      
    );
    }
  }
    

    export default connect(null, {getAuthData} )(NewApp)
    
//navPageTrainers={props.state.navPage.navPageTrainers}
    //trainingDataMessages={props.state.trainingPage.trainingDataMessages} trainingData={props.state.trainingPage.trainingData}