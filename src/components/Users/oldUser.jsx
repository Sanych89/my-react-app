import React from 'react';
import styles from './users.module.css'
import axios from 'axios'
import userDefaultFoto from '../../Assets/Img/homka.jpeg'

let Users = (props) => {

    let getUsers = () => {
    if (props.users.length === 0) {

    axios.get ("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        debugger;
        props.setUsers(response.data.items)
    })
}
}
    
   /* if (props.users.length === 0) {
        
        props.setUsers([ 
    {id: 1, imgUrl: 'https://media.istockphoto.com/id/91778222/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D1%85%D0%BE%D0%BC%D1%8F%D0%BA.jpg?s=612x612&w=0&k=20&c=FN_aCEpG6T0emG1JOs79QUJTsrtaYqi5eALUsevtzbA=',
    followed: true, userFirstName: 'Bogdan', userLastName: 'Lykhachov' , userStatus: 'Newbie', location: {city: 'Kherson', country: 'Ukraine'}},
   {id: 2, imgUrl: 'https://media.istockphoto.com/id/524718551/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D0%B4%D0%BE%D0%BF%D0%BE%D0%B7%D0%B4%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=MKDMBJf_fhiX-tK9Jt223zRuL2vjnDBRO5GT3UpGce8=',
    followed: false, userFirstName: 'Alexander', userLastName: 'Lykhachov' , userStatus: 'Newbie', location: {city: 'Kryvyy Rih', country: 'Ukraine'}},
   {id: 3, imgUrl: 'https://media.istockphoto.com/id/505094040/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%85%D1%8D%D0%BB%D0%BB%D0%BE%D1%83%D0%B8%D0%BD-%D1%82%D1%8B%D0%BA%D0%B2%D0%B0-%D1%84%D0%BE%D0%BD%D0%B0%D1%80%D0%B5%D0%B9-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B-jack.jpg?s=612x612&w=0&k=20&c=2ZLhwfpOl_EMcBNCCm4R8_0XDlJnYBF-94XWI_DGyAE=',
    followed: true, userFirstName: 'Ivan', userLastName: 'Lykhachov' , userStatus: 'Medium', location: {city: 'Kherson', country: 'Ukraine'}}, 
] // выше эмулятор того, что изначально в стейте пустой обьект юзерс который заполняется извне. 
//система проверяет - если он пустой (длина = 0 ) то вызыват функцию сетЮзерс с обьектом массива в качестве аргумента. Тот докопируется в стейт и отрисовывается.
//без иф ветки перерисовка станет вечной и браузер зависнет //
)
    } */
    
    let pagesCount = props.totalUsersCount / props.pageSize

    let pages = [];

    for (let i=1; i <= pagesCount; i++) { 
        /*цикл начинает отсчет с 1 чтобы пользователь видел отсчет не с 0, 
        /*как считает обычный цикл а с единицы */
        pages.push(i);

    }




    return <div>
        <div>
        {pages.map(p => {<span className={true && styles.selectedPage} > {p} </span>})}
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
    


