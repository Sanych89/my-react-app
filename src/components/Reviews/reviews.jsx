import React from 'react';
import { NavLink, Navigate, redirect } from 'react-router-dom';
import classes from './reviews.module.css';
import Posts from './ReviewPosts/ReviewPosts';
import ReviewsReduxForm from './reviewsForm';





function Reviews(props)     {
    
    
    //let state = props.postPage;//
    const onSubmit = (formData) => {
        console.log(formData)
       
        props.addPost(formData.reviewsMessage);


    }


    let reviewsPostJSX = props.posts.map (el => <Posts message={el.message}/>); 
    

    
    /* выше обьявлена переменная reviewText которая через метод React.createRef() просит реакт создать конкретную ссылку 
    на конкретный элемиент джскс разметки . 

    Потом в переменную submitText вносится конструкция  newPostElement.current.value; берущий по ссылку 
    
    А ниже в теге текстереая элемент реф который указывает куда эта ссылка прикреплена  */
  
  
    return (
    <div className = {classes.ReviewsMain}>
        <div className = {classes.ReviewsMainUI}> Reviews UI 

        <ReviewsReduxForm onSubmit={onSubmit} />


        </div>
        <div> Reviews EXT
      
        
        { reviewsPostJSX }
        
        </div>
    </div>
  )
}

export default Reviews