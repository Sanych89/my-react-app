

let initialState = {    
        posts: [{id: 1, message: 'Hi !'}, {id: 2, message: 'HelloHi2!'}],
        newPostText: 'TESTMESSAGE'    
}

const reviewsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3, 
                message: state.newPostText,
            };
    
            state.posts.push(newPost);
            state.newPostText = '';         
            return state;
            
        case 'UPDATE_NEW_POST_TEXT': 
        {
            { 
                state.newPostText = action.text;  
                return state;          
            }
        }
        default:
             return state;

    }
}

    /*

    if (action.type === 'ADD-POST') {  
                      
        let newPost = {
            id: 3, 
            message: state.newPostText,
        };

        state.posts.push(newPost);
        state.newPostText = '';         
        }
else if (action.type === 'UPDATE_NEW_POST_TEXT') 
    
        { 
            state.newPostText = action.text;            
        }
    
    return state;

*/



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