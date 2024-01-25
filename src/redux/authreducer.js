import { stopSubmit } from 'redux-form';
import { authAPI, authUser } from './../API/API.js';

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false
    
  
}


const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            
            return {
                
                ...state,
                ...action.payload,
                
            }
    
    default:   return state;    
}
}
export const setAuthData =  (id, email, login, isAuth) =>  ({type: SET_AUTH_DATA, payload: {id, email, login, isAuth}})

export const getAuthData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
        
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthData(id, email, login, true));
        }    
    });

}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.authLogin(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0) {
           dispatch(getAuthData())
        }    
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message})); // экшн из редакс форм //
           
        }

    })
}


export const logout = () => (dispatch) => {
    authAPI.authLogout()
    .then(response => {
        if (response.data.resultCode === 0) {
           dispatch(setAuthData(null, null, null, false))
        }    

    })
}



export default authReducer;