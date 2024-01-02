import axios from 'axios';



//Данный файл  создает DAL -слой (Data Access  Layer) - слой занимающийся запросами на сервер и т.п.
// чтобы УИ компонента не занималась не свойственными ей функциями

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
//создан базовый урл  который есть в запросах


const instance = axios.create(
    {   baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    //создан базовый урл  который есть в запросах
        withCredentials: true,
        headers: {"API-KEY": "4e3e49a8-32f1-46d5-baad-0fb3d7f5675e"}
    }
)

// const instance - с помощью метода axios.create создается сущность
// в аксиос которая имеет в себе фиксированные параметры которые будут использоваться
// в запросах сформированных с помощзью данной сущности. Например в этой всегда будет
// базовый урл, параметр виз креденшалс и хедер с апи кей 

export const usersAPI = {
    getUsers (pageNumber = 1, pageSize = 10) {
return instance.get (baseUrl + `users?page=${pageNumber}&count=${pageSize}`)
.then(response => response.data); //15.12 - по умолчанию гет запрос возвращал респонс с кучей лишних 
//данных . Данной строкой респонс ретурнится обрезанный только до участка дата
},


    unfollowFromServ (userId) {
    return instance.delete (`https://social-network.samuraijs.com/api/1.0/follow/${userId}`) 
},


     followFromServ (userId)  {
    return instance.post (`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},)
}



}

export const authUser = () => {
    return axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => response.data)
    }


