import React from 'react';
import styles from './users.module.css'
import axios from 'axios'
import userDefaultFoto from '../../Assets/Img/homka.jpeg'

let Users = (props) => 
{
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize) ;
    //Math.ceil - функция джскрипт округляющая значение вверх.
    // нужно для того, что цикл фор ниже остекает дробную часть, соотв
    // если пришло 19 элементов при размере страницы 5 то будет отображени только
    // 3 страницы а хвост в 4 элемента не будет отображено

    let pages = [];

    for (let i=1; i <= pagesCount; i++) { 
        /*цикл начинает отсчет с 1 чтобы пользователь видел отсчет не с 0, 
        /*как считает обычный цикл а с единицы */
        pages.push(i);

    }

    return <div>
        <div>
        { pages.map (p => {
            return <span className={props.currentPage === p  && styles.selectedPage } onClick={ (e) => { onPageChanged(p) ;} }> {p} </span>
        })
        //при нажатии на элемент в span вызывается обработчик событий е который
        //вызывает метод класса onPageChanged который принимает номер страницы и
        //и вызывает колбек setCurrentPage с номером страницы
        } 
        
        </div>
        
        {
            props.users.map ( u => <div key={u.id}> 
         <span>
            
            <div> <img src={u.photos.small != null ? u.photos.small : userDefaultFoto } className={styles.userPhoto}/></div>
            <div> 
                {u.followed 
                ? <button onClick={ () => { props.unfollow(u.id)}}> Unfollow </button>
                : <button onClick={ () => { props.follow(u.id) } }> Follow </button>}
              
            </div>
        </span>
        
        <span>
            <span>
            <div>{u.name} {"u.userFirstName"} {"u.userLastName"}</div>
            <div>{u.userStatus}</div>
            </span>    
            <span>
            <div> {"u.location.country"} </div>
            <div> {"u.location.city"} </div>
            </span>
        </span>    
        </div>) 
        }   
        </div>   
    

}

export default Users