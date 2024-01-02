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
            return  {...state} /*
        case UNFOLLOW:
            return {...state, 
               //users: [...state.users] } - вариант с копированием вложенного обьекта из обьекта //
             // users: state.users.map( u => u ) //
              //выше вариант с мапом - массив юзерс (новый) мапит массив из стейта и прописывает в него юзеров из массива из стейта //
                users: state.users.map( u => {
                    if (u.id === action.userID) {// если юзер ИД из массива равен юзер ИД //
                        return {...u, followed: false}}
                    return u }
                    ) 

            }    

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}
        /* кейс SET_USERS копирует стейт а в тот юзерс который там был копирует и затирает тем который пришел из екшена.
        то есть если ничего не было - пишем юзерс из экшена полностью. А если было- добавляем новое */
        default: 
            return state;
    }   
  
}

export const isBought  = () => {
    return {type: BOUGHT}
}

export default shopPageReducer;
/* setUSers это создатель экшена который будет принимать пришедшую извне информацию
users , присвать ей тип для диспатча и пересылать в редьюсер */