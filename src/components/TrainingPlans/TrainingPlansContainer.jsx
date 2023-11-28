import { Connect, connect } from "react-redux";
import TrainingPlans from './TrainingPlans'




  let mapStateToProps = (state) => {
    return {
      trainingData: state.trainingPage.trainingData,
      trainingDataMessages: state.trainingPage.trainingDataMessages,
    }
  }

  let mapDispatchToProps = (dispatch) => {
    return {      

    }
  
}

const TrainingPlansConainer = connect(mapStateToProps, mapDispatchToProps)(TrainingPlans)
/* { trainingDataJSX }  идет обращение к созданному мапом массиву который принял входящие данные, передал их на новый массив джскс элементов в которые в качестве пропсов пошли имя тренера, его ИД и урл.*/

export default TrainingPlansConainer