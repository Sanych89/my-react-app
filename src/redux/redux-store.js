import { combineReducers, legacy_createStore as createStore  } from "redux";
import reviewsPageReducer from './reviewsPageReducer';
import myCabPageReducer from './MyCabPagereducer';
import navBarReducer from './NavBarReducer';
import trainingPageReducer from './trainingPageReducer'
import usersPageReducer from './UsersPageReducer'

let reducers = combineReducers({
    postPage: reviewsPageReducer,
    myCabPage: myCabPageReducer,
    navPage: navBarReducer,
    trainingPage: trainingPageReducer,
    usersPage: usersPageReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;