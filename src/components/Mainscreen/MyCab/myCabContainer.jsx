import React from 'react';
import { actionCreatorUPDATELIKESTOCAB, actionCreatoraddClubAge } from '../../../redux/MyCabPagereducer';
import MyCab from './MyCab';


function MyCabContainer(props) {
    debugger

let state = props.store.getState();

let updateLikesToCab = (count) => {
 
  props.store.dispatch(actionCreatorUPDATELIKESTOCAB(count))     
}  

let addClubAge = () => {
  debugger
  props.store.dispatch(actionCreatoraddClubAge()) 
}

  return (<MyCab updateLikesToCab= { updateLikesToCab }  addClubAge= { addClubAge } info = { state.myCabPage} />)
}
  




export default MyCabContainer