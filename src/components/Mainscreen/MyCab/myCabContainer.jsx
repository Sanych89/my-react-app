import React from 'react';
import { addClubAge, updateLikesToCab, setUserProfile, getUserProfile, getUserStatus, udpateUserStatus } from '../../../redux/MyCabPagereducer';
import MyCab from './MyCab';
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { authUser } from './../../../API/API';




/*let authRedirectComponent = (props) => {

  if (!props.isAuth) return <Navigate to ={"/Login"}/>
  //эквивалент записи ниже. Если НЕ тру изАутх то ... //
  //if (props.isAuth == false) return <Navigate to ={"/Login"}/>//





  return <MyCabContainer {...props} />

}
*/


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

      profileId = this.props.authorizedUserId;
//      profileId = 30486 ;
    } //если нет айди то вызывается страничка с айди моим //

    
    this.props.getUserProfile(profileId)
    this.props.getUserStatus(profileId)
    
    /*usersAPI.profileFromServ(profileId)
    .then(response => {
        this.props.setUserProfile(response.data) //закидываем получаемый из сервера обьект дата в функцию setUserProfile
      })*/
    


  }

  render() {
    return (
      <MyCab 
      info={this.props.info}      
      addClubAge={this.props.addClubAge}
      updateLikesToCab={this.props.updateLikesToCab}
      setUserProfile={this.props.setUserProfile}
      status = {this.props.status} 
      udpateUserStatus = {this.props.udpateUserStatus}
      authorizedUserId = {this.props.authorizedUserId}
      isAuth = {this.props.isAuth}

      
      />

      )
    }
  }


let mapStateToProps = (state) => {
  return {
    info: state.myCabPage, //передали всю страницу как пропс //     
    isAuth: state.auth.isAuth,
    status: state.myCabPage.status,
    authorizedUserId: state.auth.id
    
  }
}




export default connect(mapStateToProps,
  {
    addClubAge,
    updateLikesToCab,
    getUserProfile,
    getUserStatus,
    udpateUserStatus,
    setUserProfile,
    
  })
 (withRouter(MyCabContainer));



