import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom'; 
import { connect } from 'react-redux';
import {logOut} from '../../redux/loginPageReducer'

const Header = (props) => {

    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <NavLink className={styles.link} activeClassName={styles.activeLink} to='/news'>Новости</NavLink>
                <NavLink className={styles.link} activeClassName={styles.activeLink} to='/profile'>Профиль</NavLink>
                {!props.isAuth?
                <NavLink className={styles.link} activeClassName={styles.activeLink} to='/login'>Войти</NavLink>
                :<NavLink className={styles.link} activeClassName={styles.activeLink} to='/login' onClick = {props.logOut}>Выйти</NavLink>}
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()=>dispatch(logOut())
    }
} 

const mapStateToProps = (state) => {
    return {  
        isAuth: state.loginPage.isAuth,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);