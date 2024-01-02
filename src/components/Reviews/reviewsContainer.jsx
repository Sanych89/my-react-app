import React from "react";
import { actionCreatorAddPost } from '../../redux/reviewsPageReducer';
import { actionCreatorUPDATENEWPOSTTEXT } from '../../redux/reviewsPageReducer';
import Reviews from './reviews'
import { connect } from "react-redux";







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