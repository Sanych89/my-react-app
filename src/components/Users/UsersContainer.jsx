import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../Common/preloader';
import { usersAPI } from '../../API/API';

 


class UsersAPIComponent extends React.Component {
    
    





    componentDidMount () {

        debugger
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
        /*this.props.toggleIsFetching(true)

        usersAPI.getUsers().then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            //18.12 - после передачи на АПИ.джс функции запроса на сервер и обрезки
            // респонса только до обьекта дата мы вместо response.data.item и т.п. просто
            //принимает обьект дата из апи и обращаемся непосредственно к нему

        })*/
    }

 
 
    onPageChanged = (pageNumber) => { 
      
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

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
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        getUserThunkCreator={this.props.getUsersThunkCreator}

        
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,    


        }
}

export default connect(mapStateToProps, 
    { 
        follow,
        unfollow,       
        
        setCurrentPage,
        
        toggleFollowingProgress, 
        getUsers,       
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