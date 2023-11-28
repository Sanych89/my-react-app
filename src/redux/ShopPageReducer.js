const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
       
    ]
};

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {...state, 
                //users: [...state.users] } - вариант с копированием вложенного обьекта из обьекта //
                // users: state.users.map( u => u ) //
                //выше вариант с мапом - массив юзерс (новый) мапит массив из стейта и прописывает в него юзеров из массива из стейта //
                users: state.users.map( u => {
                    if (u.id === action.userID) {// если юзер ИД из массива равен юзер ИД //
                        return {...u, followed: true}}
                    return u }
                    ) 

            }
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

export const followAC  = (userID) => ({type: FOLLOW, userID})
export const unfollowAC  = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users}) 
export default userPageReducer
/* setUSers это создатель экшена который будет принимать пришедшую извне информацию
users , присвать ей тип для диспатча и пересылать в редьюсер */