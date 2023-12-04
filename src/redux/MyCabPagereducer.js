const SET_USER_PROFILE = 'SET_USER_PROFILE'

let clubAge = 0;

let initialState = { 
    myCabLikeCount: [{id: 1, count: 1}, {id:2, count: 5} ],
    newMyCabLikeCount: 'Test1',
    newtrueLikeCount: 0,
    profile: null
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
        console.log(clubAge)
        clubAge += 1;
        console.log(clubAge) 
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


export default myCabPageReducer;