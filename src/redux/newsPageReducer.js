import { dataAPI } from '../api/api';

const SET_NEWS = 'SET_NEWS';
const SET_FETCHING_DATA = 'SET-FETCHING-DATA';

let initialState = {
    news: [],
    isFetching: false
}

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, news: action.news }
        case SET_FETCHING_DATA:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

const setNews = (newsList) => ({ type: SET_NEWS, news: newsList });
const fetchingData = (isFetching) => ({ type: SET_FETCHING_DATA, isFetching: isFetching })

export const getNews = () => (dispatch) => {
    dispatch(fetchingData(true))
    dataAPI.getNewsData().then(respons => {
        dispatch(setNews(respons.data.data))
        dispatch(fetchingData(false))
    })
}

export default newsPageReducer;

