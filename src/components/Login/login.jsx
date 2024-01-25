import React from "react";
import LoginReduxForm from "./loginform";
import { connect } from "react-redux";
import { login } from './../../redux/authreducer'
import { Navigate } from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {       
        props.login(formData.email, formData.password, formData.rememberMe)      
        
    }

    if (props.isAuth) {
        return <Navigate to="/MyCab" />        
    }

    return <div>
    <h1> LOGIN </h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);