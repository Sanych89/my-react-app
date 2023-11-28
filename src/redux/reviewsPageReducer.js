

let initialState = {    
        posts: [{id: 1, message: 'Hi !'}, {id: 2, message: 'HelloHi2!'}],
        newPostText: 'TESTMESSAGE'    
}

const reviewsPageReducer = (state = initialState, action) => {
    let stateCopy = {...state}; 

    switch (action.type) {
        case 'ADD-POST': {
            let text = state.newPostText;
        stateCopy = {
            ...state,
            posts: [...state.posts, {id: 3, message: text}],
            newPostText: '', 
            
        }  
    }
    // выше - более компактная запись. Ниже развернутая //
    /*        case 'ADD-POST': {
            let newPost = {
                id: 3, 
                message: state.newPostText,
            };
            //копирем стейт //
            stateCopy.posts = [...state.posts]; //копируем посты из скопированного стейте чтобы образовать новый обьект //
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';         
            return stateCopy;
        }    */ 


        return stateCopy

        case 'UPDATE_NEW_POST_TEXT': 
        {   
            { 
                stateCopy.newPostText = action.text;  
                return stateCopy;          
            }
        }
        default:
             return state;

        }
    }

    //30.10 зачем было делать копию стейта ? - если не сделать то функция коннект
    // не расценивает изменение стейта как изменение и не 
    // перерисовывает страницу. Копия постс сделана чтобы изменить и этот
    // массив который является обьектом и при копировании просто стейте 
    // не копируется а остается ссылкой.


export const actionCreatorAddPost = () => {
        
    return {
        type: 'ADD-POST'
    }
}

export const actionCreatorUPDATENEWPOSTTEXT = (text) => {
    
    
    return {            
        type: 'UPDATE_NEW_POST_TEXT', text: text
    }
}

export default reviewsPageReducer;