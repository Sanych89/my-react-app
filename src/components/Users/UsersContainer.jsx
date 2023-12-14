import React from 'react';
import { Connect, connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/UsersPageReducer';
import Users from './Users';
import axios from 'axios';
import Preloader from '../Common/preloader';

 


class UsersAPIComponent extends React.Component {





    componentDidMount () {
        
        this.props.toggleIsFetching(true)
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {withCredentials: true}
        )
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)//

        })
    }

 
 
    onPageChanged = (pageNumber) => { 
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {withCredentials: true}
        )
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
    //onPageChanged шлет новый запрос на сервер и получает новую страницу
    // с пользователями для отображения при нажатии на спан элемент
    // при этом номер страницы берется уже не из пропсов а с переменной  pageNumber


    

    render () {

       
        return <>
        {this.props.isFetching ? <Preloader /> : null }
         <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        
        />
        </>

       //в компоненту юзер класс из контейнерной пришли пропсы.
       //чтобы презентационная юзерс могла их видеть нужно туда ее прокинуть
       

    }
} 

let mapStateToProps =  (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
        }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {            
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }, 
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }, 
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
        
    }
} */



export default connect(mapStateToProps, 
    { 
        follow,
        unfollow,        
        setUsers,
        setCurrentPage,
        setTotalUsersCount,                
        toggleIsFetching,              
    //   30.11 - вместо функции    mapDispatchToProps которая прописывала колбек к екшн криейторам
    //   в коннект передается обьект внутри которого есть екшн криейторы сразу. 
    // т.е. избавляемся от лишнего кода. 
    // В компоненту передавался колбек (напр follow с параметром  userID )
    // который вызывал екшн криейтор с этим же параметром который в свою очередь вызывал 
    // екшн который потом диспатчился 
    // 2. Поскольку мы можем описывать обьект свойством которого является переменная 
    // с тем же именем чере синтаксис  { свойство, свойство, свойство} то мы убрали АС из наименования 
    // екшн криейторов и они теперь импортируются в контейнер из редьюсера, становятся обьектом у \
    // которго есть свойства с идентичными названиями функций и которые будут переданы в коннект 

    }
    )(UsersAPIComponent)

//на 28.11 структура такова - есть классовая компонента 
// UsersAPIComponent которая через коннект получает данные
// из стора. Она передает их в презентацинную компоненту юзерс 
// и также применяет эти данные как контейнерную логику в 
// mapStateToProps и т.п.

//