import {usersAPI} from './../API/API.js'
import {profileAPI} from './../API/API.js'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let clubAge = 0;

let initialState = { 
    myCabLikeCount: [{id: 1, count: 1}, {id:2, count: 5} ],
    newMyCabLikeCount: 'Test1',
    newtrueLikeCount: 0,
    profile: null,
    status: "",
}

const myCabPageReducer = (state = initialState, action) => {

switch (action.type) {

case 'ADDLIKESTOCAB': 
{ let stateCopy = {...state} 
    {
        stateCopy.addLikesToCab();
        return stateCopy;
    }
}

case 'SET_USER_STATUS': 
    return {
        ...state,
        status: action.status
    }

case 'UPDATELIKESTOCAB':
{   let stateCopy = {...state} 
    {            
        stateCopy.newMyCabLikeCount = action.count;
        return stateCopy;
    }
}

case 'ADDCLUBAGE':
    { let stateCopy = {...state} 
        {   
        
        clubAge += 1;
       
        stateCopy.newtrueLikeCount = clubAge    
        return stateCopy;
    }
    }
case SET_USER_PROFILE:
    
    return {...state, profile: action.profile}

default:  
return state;

}
}

export const addLikesToCab = () => {
    return {
        type: 'ADDLIKESTOCAB'
    }
}

export const updateLikesToCab = (count) => {
    return {
    type: 'UPDATELIKESTOCAB', count: count
}
}

export const addClubAge = () => {
    return {
        type: 'ADDCLUBAGE'
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (profileId) => (dispatch)  => {

    profileAPI.getProfile(profileId)
    .then(response => {
        dispatch(setUserProfile(response.data)) //закидываем получаемый из сервера обьект дата в функцию setUserProfile
      })
}

export const setStatus = (status) => ({type: 'SET_USER_STATUS' , status}) 

export const getUserStatus = (profileId) => (dispatch)  => {

    profileAPI.getStatus(profileId)
    .then(response => {
        dispatch(setStatus(response.data)) //закидываем получаемый из сервера обьект дата в функцию setUserProfile
      })
}

export const udpateUserStatus = (status) => (dispatch)  => {

    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
}


export default myCabPageReducer;