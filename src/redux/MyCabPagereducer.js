let clubAge = 0;

let initialState = { 
    myCabLikeCount: [{id: 1, count: 1}, {id:2, count: 5} ],
    newMyCabLikeCount: 'Test1',
    newtrueLikeCount: 0
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

default:  
return state;

}
}

export const actionCreatorADDLIKESTOCAB = () => {
    return {
        type: 'ADDLIKESTOCAB'
    }
}

export const actionCreatorUPDATELIKESTOCAB = (count) => {
    return {
    type: 'UPDATELIKESTOCAB', count: count
}
}

export const actionCreatoraddClubAge = () => {
    return {
        type: 'ADDCLUBAGE'
    }
}


export default myCabPageReducer;