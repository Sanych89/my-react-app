import React from 'react';
import ReactDOM from 'react-dom/client';
import './TrainingPlans.module.css';
import classes from './TrainingPlans.module.css'
import { NavLink } from 'react-router-dom';
import Trainer from './Trainers/Trainers';






function Trainermessage (props) {
  return (
    <div className={classes.trainermessage}>{props.trainerMsg}    
    </div>
  )
}

function TrainingPlans(props) {


let trainingDataJSX = props.trainingData.map (el => <Trainer trainerName={el.trainerName} trainerUrl={el.trainerUrl} trainerId={el.id}/>); 
/*данной операцией мы мапим входящий массив trainingData и создаем выходящий массив джскс элементов которых будет столько, сколько элементов у нас есть */

let trainingDataMessagesJSX = props.trainingDataMessages.map (el => <Trainermessage trainerMsg={el.trainerMsg} trainerMsgId={el.id} />);

    return (
        <div className={classes.TrainingMainScreen}>

          <div className={classes.training_items}>
          { trainingDataJSX } 
          </div>

          
          <div className={classes.trainermessages}>
          { trainingDataMessagesJSX }
          </div>
        </div>
  )
}
/* { trainingDataJSX }  идет обращение к созданному мапом массиву который принял входящие данные, передал их на новый массив джскс элементов в которые в качестве пропсов пошли имя тренера, его ИД и урл.*/

export default TrainingPlans