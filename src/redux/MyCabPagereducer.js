let clubAge = 0;

let initialState = { 
    myCabLikeCount: [{id: 1, count: 1}, {id:2, count: 5} ],
    newMyCabLikeCount: 'Test1',
    newtrueLikeCount: 0
}

const myCabPageReducer = (state = initialState, action) => {

switch (action.type) {

case 'ADDLIKESTOCAB': 
{
    {
        state.addLikesToCab();
        return state;
    }
}


case 'UPDATELIKESTOCAB':
{
    {            
        state.newMyCabLikeCount = action.count;
        return state;
    }
}

case 'ADDCLUBAGE':
    {
        {   
        console.log(clubAge)
        clubAge += 1;
        console.log(clubAge) 
        state.newtrueLikeCount = clubAge    
        return state;
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