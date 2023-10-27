import reviewsPageReducer from './reviewsPageReducer'
import myCabPageReducer from './MyCabPagereducer'


let store = {
    _state: {
        trainingPage: {
        trainingData: [{trainerName: "Cardio Trainer", trainerUrl: "cardio", id: 1},{trainerName: "Strenght Trainer", trainerUrl: "strenght", id: 2 }, {trainerName: "Crossfit Trainer", trainerUrl: "crossfit", id: 3 }, {trainerName: "Joga Trainer", trainerUrl: "Joga", id: 4}],
        trainingDataMessages: [{trainerMsg: "Good!!!", id: 1},{trainerMsg: "Medium try.", id: 2 }, {trainerMsg: "Need improvements!", id: 3 },  {trainerMsg: "No Need for improvements.", id: 4 } , {trainerMsg: "Superb!", id: 5 } ]
        },   
        
        navPage: {
            navPageTrainers: [{trainerRealName: 'Alex!', trainerImgUrl: 'https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png', id: 1 }, {trainerRealName: 'Aya', trainerImgUrl: 'https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_640.jpg', id: 2 }],
            navPageTrainersPrice: [{trainerRealName: 'Alex', trainerPrice: 3000, id: 1 },{trainerRealName: 'Aya', trainerPrice: 5000, id: 2 }]
        },
        
        postPage: {
            posts: [{id: 1, message: 'Hi !'}, {id: 2, message: 'HelloHi2!'}],
            newPostText: 'TESTMESSAGE'
        
        },
        
        myCabPage: {
            myCabLikeCount: [{id: 1, count: 1}, {id:2, count: 5} ],
            newMyCabLikeCount: 'Test1',
            newtrueLikeCount: 0
        },
        },
    
    getState () {
        return this._state;
    },


    _callSubscriber() {
        console.log('State Changed!');
        },


        
    _addLikesToCab () {           
        
            let newLikes = {
                id: 2, 
                count: this._state.myCabPage.newMyCabLikeCount,
            };
        
            this._state.myCabPage.myCabLikeCount.push(newLikes);
            this._state.myCabPage.newMyCabLikeCount = '';     
            this._callSubscriber(this._state);
        },
    

        
    subscribe (observer) {
        this._callSubscriber = observer;
           } ,




        
    dispatch (action) { //Диспатч будет распределителем который будет вызывать те или иные методы 
        // в диспатч передается обьект екшн который обязательно должен иметь свойство тип (тайп) { например type: 'ADD-POST'} которое говорит
        // что нужно сделать и какой метод из стора нужно вызвать.

        //24.10.23 - внесли ссылку на редьюсер. Функция которая принимает пришедший в диспатч екшн 
        // и направляет ее во внешний обработчик чтобы не раздувать диспатч. //

        this._state.postPage = reviewsPageReducer(this._state.postPage, action);

        //т.е. берем postPage из this._state и передаем этому обьекту результат отработки функции
        // reviewsPageReducer 

        this._state.myCabPage = myCabPageReducer(this._state.myCabPage, action);

        this._callSubscriber(this._state);  

        /*if (action.type === ADD_POST) {  
                      
                let newPost = {
                    id: 3, 
                    message: this._state.postPage.newPostText,
                };
        
                this._state.postPage.posts.push(newPost);
                this._state.postPage.newPostText = ''; 
                this._callSubscriber(this._state);
                }
        else if (action.type === UPDATE_NEW_POST_TEXT) 
                { 
                    this._state.postPage.newPostText = action.text;
                    this._callSubscriber(this._state);
                }
        
        else if (action.type === 'ADDLIKESTOCAB') 
        {
            this._addLikesToCab();
        }

        else if (action.type === 'UPDATELIKESTOCAB') 
        {            
            this._updateLikesToCab(action.likeCountText);
        }
        else if (action.type === 'ADDCLUBAGE')
        {   
            console.log(clubAge)
            clubAge += 1;
            console.log(clubAge) 
            this._state.myCabPage.newtrueLikeCount = clubAge
            this._callSubscriber(this._state);       
        } */


        }
/* Можно прописывать функцию в диспатче полностью. Можно сделать функцию приватной не в нем а отдельно и вызывать ее как приватный метод из диспатча. 
Например ADD-POST на 16.10 реализован как функция, а ADDLIKESTOCAB и UPDATELIKESTOCAB- как вызов метода*/
    }







export default store


window.store = store; /*для дебага  -можно в консоли вызывать стейт и смотреть что есть в каких обьектах */



/* функция addPost принимает аргумент postMessage создает обьект newPost который методом push вносит его в страницу-обьект postPage в под обьект posts */







/*из индекс джс мы сделали вызов функции сабскрайб с аргументом в виде функции 
rerenderEntireTree которая перерисовывает экран.

в стейте идет вызов функции сабскрайб которая приняла в виде аргумента под названиеми обзервер
функцию rerenderEntireTree.

мы пытаемся вызвать функцию rerenderEntireTree которая написана вверху стейта (заглушка) 
стейт ищет ее и, найждя, применяет инструкцию переприсвоить этой функции то, что было принято
им как аргумент извне. И функция уже из стейта вызывает внешнюю относительно нее
функцию и перерисовывает экран. Импорта при этом не происходит и циклической
зависимости нет */