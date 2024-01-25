import React from 'react';
import styles from './users.module.css'
import axios from 'axios'
import userDefaultFoto from '../../Assets/Img/homka.jpeg'
import { NavLink } from 'react-router-dom';
import { followFromServ,  unfollowFromServ, usersAPI} from '../../API/API';



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
            return <span className={props.currentPage === p  && styles.selectedPage } onClick={ (e) => { props.onPageChanged(p) ;} }> {p} </span>
        })
        //при нажатии на элемент в span вызывается обработчик событий е который
        //вызывает метод класса onPageChanged который принимает номер страницы и
        //и вызывает колбек setCurrentPage с номером страницы
        } 
        
        </div>
        
        {
            props.users.map ( u => <div key={u.id}> 
         <span>
            
            <div> 
                <NavLink to={'/MyCab/' + u.id}>

                <img src={u.photos.small != null ? u.photos.small : userDefaultFoto } className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div> 
                
                {u.followed 
                
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick= { () => { 
                    /*если в пропсах  атрибут followingInProgress будет тру то кнопка будет отключена*/
                    /*21.12 - поскольку followingInProgress теперь массив, то методом some проверяется есть ли в нем
                    ид фоллоу пользователей и отключает им кнопки */
                    props.unfollow(u.id);               
                }}> Unfollow </button>  
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {     
                    props.follow(u.id);
                                   
                   }}>Follow </button>}
            </div>
        </span>
        
        <span>
            <span>
            <div>{u.name} </div>
            <div>{u.status}</div>
            </span>    
            <span>
            <div>  </div>
            <div>  </div>
            </span>
        </span>    
        </div>) 
        }   
        </div>   
    

}



export default Users