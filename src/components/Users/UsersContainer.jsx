import React from 'react';
import UsersAPIComponent from './UsersClass';
import { Connect, connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/UsersPageReducer';




let mapStateToProps =  (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
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
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)