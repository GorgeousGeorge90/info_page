import {all} from 'redux-saga/effects';
import { authWatcher } from './authSaga';
import { mainWatcher } from './mainSaga';
import {commentsWatcher} from "./commentsSaga";


export function* rootWatcher() {
    yield all([authWatcher(), mainWatcher(), commentsWatcher()])
}


