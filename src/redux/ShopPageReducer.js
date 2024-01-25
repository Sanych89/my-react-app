const BOUGHT = 'BOUGHT'


let initialState = {
    quantity: 5,
    price: 100,
    name: 'beyblade',
    boughtQTY: 0,
    boughtNAME: 'Пусто',
};




const shopPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOUGHT:
                  
            state.quantity -= 1;              
            state.boughtQTY += 1;
            state.boughtNAME = state.name;
            return  {...state} 
        default: 
            return state;
    }   
  
}

export const isBought  = () => {
    return {type: BOUGHT}
}

export default shopPageReducer;
