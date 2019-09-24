import { dataAPI } from '../api/api';

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';
const SET_FETCHING_DATA = 'SET-FETCHING-DATA';
const CLEAR_ERROR_MESSAGE = 'CLEAR-ERROR-MESSAGE'

let initialState = {
    profileData: {
        userId: null,
        city: null,
        languages: [],
        social: []
    },
    errorMessage: '',
    isFetching: false,
    iconsUrlList: [
        { name: 'vk', url: 'img/vk.png' },
        { name: 'telegram', url: 'img/telegram.png' },
        { name: 'web', url: 'img/web.png' },
        { name: 'youtube', url: 'img/Youtube.png' },
        { name: 'twitter', url: 'img/twitter.png' },
        { name: 'twitch', url: 'img/twitch.png' }
    ]
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            let newProfileData = {
                userId: action.userId,
                city: action.city,
                languages: action.languages,
                social: action.social
            }
            return {
                ...state,
                profileData: newProfileData
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: '',
            }
        case SET_FETCHING_DATA:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

const setProfileData = (userId, city, languages, social) => ({
    type: SET_PROFILE_DATA,
    userId: userId,
    city: city,
    languages: languages,
    social: social
});
const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, errorMessage: message })
const clearErrorMessage = () => ({ type: CLEAR_ERROR_MESSAGE })
const fetchingData = (isFetching) => ({ type: SET_FETCHING_DATA, isFetching: isFetching })

export const setProfile = (userId) => (dispatch) => {
    dispatch(fetchingData(true))
    dataAPI.getProfileData(userId).then(response => {
        if (response.data.status === 'ok') {
            dispatch(setProfileData(response.data.data.userId, response.data.data.city, response.data.data.languages, response.data.data.social))
        }
        else if (response.data.status === 'err') {
            dispatch(setErrorMessage(response.data.message))
        }
        dispatch(fetchingData(false))
    }).catch(error => {
        error.status === 503 ? dispatch(setErrorMessage('service_unavailable'))
            : dispatch(setErrorMessage('some_error'))
    })
}
export const removeErrorMessage = () => (dispatch) => {
    dispatch(clearErrorMessage())
}

export default profilePageReducer;