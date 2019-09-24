import React from 'react';
import styles from './News.module.css';
import { connect } from 'react-redux';
import { getNews } from '../../redux/newsPageReducer'
import { useEffect } from 'react';
import Preloader from '../common/Preloader/Preloader';

const News = (props) => {

    useEffect(() => {
        props.getNews()
    }, []);

    return (
        <div className={styles.news}>
             {props.isFetching ? <Preloader /> : null}
            <div className={styles.newsBox}>
            {props.news.map((n,i)=> {
                return (
                    <div className={styles.newsItem} key={i}>
                        <h2>{n.title}</h2>
                        <p>{n.text}</p>
                    </div>
                )
            })}
            
            </div>
            <p className={styles.newsCount}>Всего новостей: {props.news.length}</p>
        </div>
    )
};

let mapDispatchToProps = (dispatch) => {
    return { getNews: () => (dispatch(getNews())) }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        isFetching: state.newsPage.isFetching,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(News)