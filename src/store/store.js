import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import authReducer from './authReducer/authReducer';
import mainReducer from './mainReducer/mainReducer';
import commentsReducer from './commentsReducer/commentsReducer';
import { rootWatcher } from './sagas';


const rootReducer = combineReducers({
    auth: authReducer,
    main: mainReducer,
    comments: commentsReducer,
})

const saga = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(saga))

window.store = store

saga.run(rootWatcher)


export default store