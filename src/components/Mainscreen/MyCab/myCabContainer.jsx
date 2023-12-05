import React from 'react';
import { addClubAge, updateLikesToCab, setUserProfile } from '../../../redux/MyCabPagereducer';
import MyCab from './MyCab';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

/* функция использующая хук useParams который берет параметры из УРЛ. 
 использовано тк в классовой компоненте нельзя использовать хуки а метод виз роутер из
 выпуска 60 более не функционирует */


class MyCabContainer extends React.Component {

  
  

  componentDidMount () {
    
    let profileId = this.props.router.params.id

    if (!profileId) {
      profileId = 2;
    } //если нет айди то вызывается страничка с айди 2 //

    

    
    
   
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
    .then(response => {
        this.props.setUserProfile(response.data) //закидываем получаемый из сервера обьект дата в функцию setUserProfile
      })
    


  }

  render() {
    return (
      <MyCab 
      info={this.props.info}      
      addClubAge={this.props.addClubAge}
      updateLikesToCab={this.props.updateLikesToCab}
      setUserProfile={this.props.setUserProfile}
      
      />

      )
    }
  }


let mapStateToProps = (state) => {
  return {
    info: state.myCabPage, //передали всю страницу как пропс //     
    
  }
}




export default connect(mapStateToProps,
  {
    addClubAge,
    updateLikesToCab,
    setUserProfile,
  })
 (withRouter(MyCabContainer));



