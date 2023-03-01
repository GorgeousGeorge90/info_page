import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import mainReducer from '../modules /MainFilmsWrapper/store/mainReducer';
import commentsReducer from '../modules /Comments/store/commentsReducer';
import { rootWatcher } from './sagas';
import searchReducer from "../modules /NewFilmsList/store/searchReducer";
import authReducer from "../modules /AuthForm/store/authReducer";
import phraseReducer from "../modules /Phrase/store/phraseReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    phrase: phraseReducer,
    main: mainReducer,
    comments: commentsReducer,
    search: searchReducer,
})

const saga = createSagaMiddleware()

const store = legacy_createStore(rootReducer, applyMiddleware(saga))

window.store = store

saga.run(rootWatcher)


export default store