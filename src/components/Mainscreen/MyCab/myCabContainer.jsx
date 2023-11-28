import React from 'react';
import { actionCreatorUPDATELIKESTOCAB, actionCreatoraddClubAge } from '../../../redux/MyCabPagereducer';
import MyCab from './MyCab';
import StoreContext from '../../../storeContext';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    info: state.myCabPage //передали всю страницу как пропс // 
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addClubAge: () => {dispatch(actionCreatoraddClubAge()) },
    updateLikesToCab: (count) => {dispatch(actionCreatorUPDATELIKESTOCAB(count))},
}
}

const MyCabContainer = connect(mapStateToProps, mapDispatchToProps)(MyCab);

export default MyCabContainer 