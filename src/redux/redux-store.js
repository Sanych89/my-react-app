import { combineReducers, legacy_createStore as createStore  } from "redux";
import reviewsPageReducer from './reviewsPageReducer';
import myCabPageReducer from './MyCabPagereducer';
import navBarReducer from './NavBarReducer';
import trainingPageReducer from './trainingPageReducer'

let reducers = combineReducers({
    postPage: reviewsPageReducer,
    myCabPage: myCabPageReducer,
    navPage: navBarReducer,
    trainingPage: trainingPageReducer,
})

let store = createStore(reducers);

export default store;