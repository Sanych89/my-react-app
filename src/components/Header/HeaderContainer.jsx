import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthData } from '../../redux/authreducer';
import { authUser } from '../../API/API';

class HeaderContainer extends React.Component {

    componentDidMount () {
        
       authUser().then(data => {
        
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            this.props.setAuthData(id, email, login);
        }    
    })
}

    render () {
    return <Header {...this.props} />  


}
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {setAuthData})(HeaderContainer)