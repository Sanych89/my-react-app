import React from "react";
import { actionCreatorAddPost } from '../../redux/reviewsPageReducer';
import { actionCreatorUPDATENEWPOSTTEXT } from '../../redux/reviewsPageReducer';
import Reviews from './reviews'
import { connect } from "react-redux";
import { NavLink, Navigate, redirect } from 'react-router-dom';




//let authRedirectComponent = withAuthRedirect (Reviews)


let mapStateToProps = (state) => {
    return {
        posts: state.postPage.posts,
        newPostText: state.postPage.newPostText,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (reviewsMessage) => {dispatch(actionCreatorAddPost(reviewsMessage))},
        updateNewPost: (text) => {dispatch(actionCreatorUPDATENEWPOSTTEXT(text)) }

    }
}
const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);





export default ReviewsContainer