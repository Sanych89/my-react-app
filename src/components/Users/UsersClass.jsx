import React from 'react';
import styles from './users.module.css'
import axios from 'axios'
import userDefaultFoto from '../../Assets/Img/homka.jpeg'
import Users from 'Users.jsx'
 

class UsersAPIComponent extends React.Component {





    componentDidMount () {
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)//
        })
    }

 
 
    onPageChanged = (pageNumber) => { 
        this.props.setCurrentPage(pageNumber);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            
            this.props.setUsers(response.data.items)
        })
    }
    //onPageChanged шлет новый запрос на сервер и получает новую страницу
    // с пользователями для отображения при нажатии на спан элемент
    // при этом номер страницы берется уже не из пропсов а с переменной  pageNumber


    

    render () {

       
        return <Users/>
       
    }
} 



export default UsersAPIComponent