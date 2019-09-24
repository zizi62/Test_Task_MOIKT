import React from 'react';
import styles from './Login.module.css';
import { errorMessage } from '../../errors';


const Login = (props) => {
    return (
        <div className={styles.login}>
            <form className={styles.loginForm}>
                {props.errorMessage && <p className={styles.errorMessage}>{errorMessage(props.errorMessage)}</p>}
                <div className={styles.loginInput}>
                    <input className={styles.email} onChange={props.emailType} onKeyDown={props.onKeyEnterDown} type='email' placeholder='email' />
                </div>
                <div className={styles.loginInput}>
                    <input className={styles.password} onChange={props.passwordType} type='text' placeholder='password' value={props.passwordText} />
                </div>
                {props.isFetching ? <button className={styles.loginBtn} disabled={true} >Проверяем...</button>
                    : <button className={styles.loginBtn} disabled={props.emailText.length < 3 || props.passwordText.length < 3} onClick={props.setLoginData}>Войти</button>}
            </form>
        </div>
    )
};
export default Login;