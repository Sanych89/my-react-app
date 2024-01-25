import { applyMiddleware, combineReducers, legacy_createStore as createStore  } from "redux";
import reviewsPageReducer from './reviewsPageReducer';
import myCabPageReducer from './MyCabPagereducer';
import navBarReducer from './NavBarReducer';
import trainingPageReducer from './trainingPageReducer'
import usersPageReducer from './UsersPageReducer'
import authReducer from "./authreducer";
import shopPageReducer from "./ShopPageReducer"
import {thunk as thunkMiddleware} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'



let reducers = combineReducers({
    postPage: reviewsPageReducer,
    myCabPage: myCabPageReducer,
    navPage: navBarReducer,
    trainingPage: trainingPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    shopPage: shopPageReducer,
    form:  formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;