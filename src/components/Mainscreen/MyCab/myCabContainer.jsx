import React from 'react';
import { addClubAge, updateLikesToCab, setUserProfile } from '../../../redux/MyCabPagereducer';
import MyCab from './MyCab';
import { connect } from 'react-redux';
import axios from 'axios';


class MyCabContainer extends React.Component {
  

  componentDidMount () {
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
 (MyCabContainer);



