import React from "react";
import { actionCreatorAddPost } from '../../redux/reviewsPageReducer';
import { actionCreatorUPDATENEWPOSTTEXT } from '../../redux/reviewsPageReducer';
import Reviews from './reviews'
//import StoreContext from "../../storeContext";
import { connect } from "react-redux";



/*const ReviewsContainer = () => {
    
return <StoreContext.Consumer>

{ store => {

let addPost = () => {                           
    store.dispatch(actionCreatorAddPost());      
      
} /*функция добавляет в массив в стейте запись */

//let onPostChange = (text) => {
  //  store.dispatch(actionCreatorUPDATENEWPOSTTEXT(text)) ;
       
//}

//return <Reviews updateNewPostText={ onPostChange } addPost={ addPost } posts={ store.getState().postPage.posts } newPostText = { store.getState().postPage.newPostText}/> 
  //  }
//}
    //</StoreContext.Consumer>
//}



let mapStateToProps = (state) => {
    return {
        posts: state.postPage.posts,
        newPostText: state.postPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(actionCreatorAddPost())},
        updateNewPost: (text) => {dispatch(actionCreatorUPDATENEWPOSTTEXT(text)) }

    }
}
const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);



export default ReviewsContainer