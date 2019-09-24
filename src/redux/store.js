import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import newsPageReducer from './newsPageReducer';
import profileReducer from './profilePageReduser';
import loginPageReducer from './loginPageReducer'


let reducers = combineReducers({
    profilePage:profileReducer,
    newsPage: newsPageReducer,
    loginPage: loginPageReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store;