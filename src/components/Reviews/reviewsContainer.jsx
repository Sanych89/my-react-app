import React from "react";
import { actionCreatorAddPost } from '../../redux/reviewsPageReducer';
import { actionCreatorUPDATENEWPOSTTEXT } from '../../redux/reviewsPageReducer';
import Reviews from './reviews'


function ReviewsContainer(props) {
    

let state = props.store.getState(); 

let addPost = () => {                           
    props.store.dispatch(actionCreatorAddPost())      
      
} /*функция добавляет в массив в стейте запись */

let onPostChange = (text) => {
    props.store.dispatch(actionCreatorUPDATENEWPOSTTEXT(text)) 
    
    
}

return (<Reviews updateNewPostText={ onPostChange } addPost={ addPost } posts={ state.postPage.posts } newPostText = {state.postPage.newPostText}/> ) 
}

export default ReviewsContainer