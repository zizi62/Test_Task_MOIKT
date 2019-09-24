import React, { useState, useEffect } from 'react';
import { getAuthUserData, removeErrorMessage } from '../../redux/loginPageReducer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';


const LoginContainer = (props) => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    useEffect(() => {
        return () => props.removeErrorMessage()
    }, []);

    let emailType = (e) => {
        let emailText = e.currentTarget.value;
        setEmailText(emailText)
    }
    let passwordType = (e) => {
        let passwordText = e.currentTarget.value;
        setPasswordText(passwordText)
    }
    let setLoginData = (e) => {
        e.preventDefault()
        if (!validateEmail(emailText)) { return }
        props.getAuthUserData(emailText, passwordText)
        setPasswordText('')
    }
    let onKeyEnterDown = (e) => {
        if (e.key === 'Enter'){setLoginData()}
    }
    let validateEmail = (elem) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(elem) == false) {
            alert('Введите корректный e-mail');
            return false;
        }
        return true
    }
    return props.isAuth ? <Redirect to='/profile' />
        : <Login {...props}
            passwordText={passwordText}
            emailText={emailText}
            emailType={emailType}
            passwordType={passwordType}
            onKeyEnterDown={onKeyEnterDown}
            setLoginData={setLoginData}
        />
};

let mapDispatchToProps = (dispatch) => {
    return {
        getAuthUserData: (emailText, passwordText) => (dispatch(getAuthUserData(emailText, passwordText))),
        removeErrorMessage: () => (dispatch(removeErrorMessage()))
    }
}

let marStateToProps = (state) => {
    return {
        isFetching: state.loginPage.isFetching,
        errorMessage: state.loginPage.errorMessage,
        isAuth: state.loginPage.isAuth
    }
}



export default connect(marStateToProps, mapDispatchToProps)(LoginContainer);