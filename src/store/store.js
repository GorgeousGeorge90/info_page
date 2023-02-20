import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import authReducer from '../modules /AuthForm/store/authReducer';
import mainReducer from '../modules /MainFilmsWrapper/store/mainReducer';
import commentsReducer from '../modules /Comments/store/commentsReducer';
import phraseReducer from '../modules /Phrase/store/phraseReducer';
import { rootWatcher } from './sagas';


const rootReducer = combineReducers({
    auth: authReducer,
    phrase: phraseReducer,
    main: mainReducer,
    comments: commentsReducer,
})

const saga = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(saga))

window.store = store

saga.run(rootWatcher)


export default store