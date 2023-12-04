const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [
       
    ],
    pageSize: 5, //размер страницы в плане количества записей для отображения при загрузке их с сервера
    totalUsersCount: 20, //иниц значение общего количества страниц для формирования кнопок переключения по списку пользователей
    currentPage: 1, //иниц значение отображения текущей страницы которая будет подсвечена в УИ
    isFetching: true
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
            return { ...state, users: action.users}
        /* кейс SET_USERS копирует стейт а в тот юзерс который там был копирует и затирает тем который пришел из екшена.
        то есть если ничего не было - пишем юзерс из экшена полностью. А если было- добавляем новое */
        //return { ...state, users: [...state.users, ...action.users]}
        //23/11/2023 - переписано в формат return { ...state, users: action.users} 
        //чтобы полностью менялось отобрадение на странице а не дописывались юззеры в конец
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}


        default: 
            return state;
    }   
  
}

export const follow  = (userID) => ({type: FOLLOW, userID})
export const unfollow  = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users}) 
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default userPageReducer
/* setUSers это создатель экшена который будет принимать пришедшую извне информацию
users , присвать ей тип для диспатча и пересылать в редьюсер */ 