import { dataAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';
const SET_FETCHING_DATA = 'SET-FETCHING-DATA';
const LOG_OUT = 'LOG-OUT';
const CLEAR_ERROR_MESSAGE = 'CLEAR-ERROR-MESSAGE';

let initialState = {
    id: null,
    isAuth: false,
    errorMessage: '',
    isFetching: false
}

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                isAuth: true,
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
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
                id: null
            }

        default:
            return state;
    }
}

const setUserData = (id) => ({ type: SET_USER_DATA, id: id })
const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, errorMessage: message })
const clearErrorMessage=()=>({type:CLEAR_ERROR_MESSAGE})
const fetchingData = (isFetching) => ({ type: SET_FETCHING_DATA, isFetching: isFetching })
const goLogOut = () => ({ type: LOG_OUT })

export const getAuthUserData = (email, password) => (dispatch) => {
    dispatch(fetchingData(true))
    dataAPI.sendAuthData(email, password).then(response => {
        if (response.data.status === 'ok') {
            dispatch(setUserData(response.data.data.id));
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


export const logOut = () => (dispatch) => {
    dispatch(goLogOut());
}

export default loginPageReducer;