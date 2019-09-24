import React from 'react';
import styles from './Profile.module.css';
import Preloader from '../common/Preloader/Preloader';
import { errorMessage } from '../../errors';

const Profile = (props) => {
    let icon = props.profile.social.map((soc, i) => {
        let iconsUrl = props.iconsUrlList.find(item => item.name === soc.label)
        return (<div className={styles.iconItem} key={i}>
            <a target="_blank" href={soc.link}>
                <img className={styles.iconImg} src={process.env.PUBLIC_URL + iconsUrl.url} />
            </a>
        </div>)
    })
    return (
        <div className={styles.profile}>
            {props.isFetching ? <Preloader /> : null}
            <div className={styles.profileBox}>
                <p className={styles.cityTitle}>Город:</p>
                <p>{props.profile.city}</p>
                <p className={styles.languagesTitle}>Знание языков:</p>
                {props.profile.languages.map((lang, i) => {
                    return (<div key={i}><p>+{lang}</p></div>)
                })}
                <div className={styles.iconBox}>
                    <p>Ccылки:</p>
                    {icon}
                </div>
            </div>
            <div className={styles.otherProfile} >
                <p>Имитация получения другого пользователя</p>
                {props.errorMessage && <p>{errorMessage(props.errorMessage)}</p>}
                <button className={styles.otherProfileBtn} onClick={props.setOtherUser}>Запрос id=2</button>
            </div>
        </div>
    )
};
export default Profile

