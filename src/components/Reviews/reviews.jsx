import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './reviews.module.css';
import Posts from './ReviewPosts/ReviewPosts';




function Reviews(props) {
    
    //let state = props.postPage;//

    let reviewsPostJSX = props.posts.map (el => <Posts message={el.message}/>); 
    
    let reviewText = React.createRef();

    let onAddPost = () => {                     
        props.addPost();      
           
          
    } /*функция добавляет в массив в стейте запись */

    let onPostChange = () => {
        let text = reviewText.current.value;     
        
        
        props.updateNewPostText(text);  
        
        
    } /*функция берет данные из значения текстареа и отсылает его в переменную  newPostText в стейте */

  
    
    /* выше обьявлена переменная reviewText которая через метод React.createRef() просит реакт создать конкретную ссылку 
    на конкретный элемиент джскс разметки . 

    Потом в переменную submitText вносится конструкция  newPostElement.current.value; берущий по ссылку 
    
    А ниже в теге текстереая элемент реф который указывает куда эта ссылка прикреплена  */
  
  
    return (
    <div className = {classes.ReviewsMain}>
        <div className = {classes.ReviewsMainUI}> Reviews UI 
        <textarea onChange= {onPostChange} ref={reviewText} value={props.newPostText}> </textarea>
        <button onClick={onAddPost}> Отправить отзыв </button>


        </div>
        <div> Reviews EXT
      
        
        { reviewsPostJSX }
        
        </div>
    </div>
  )
}

export default Reviews