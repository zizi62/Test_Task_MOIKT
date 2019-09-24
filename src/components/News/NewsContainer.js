import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/newsPageReducer'
import { useEffect } from 'react';
import News from './News';

const NewsContainer = (props) => {
    useEffect(() => {
        props.getNews()
    }, []);
    return (
        <News {...props}/>
    )
};

let mapDispatchToProps = (dispatch) => {
    return { getNews: () => (dispatch(getNews())) }
};

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        isFetching: state.newsPage.isFetching,
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)