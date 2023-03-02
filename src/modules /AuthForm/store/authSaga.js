import { takeEvery, put } from 'redux-saga/effects';
import {asyncAuthTypes } from './types';
import {authActions} from "./actions";
import checkFn from '../helpers/checkFn/checkFn';



const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

function* logInWorker(action) {
    yield put(authActions.loading(true))
    const result = yield checkFn(action.payload)
    if (result) {
        yield delay(2000)
        yield put(authActions.logIn())
    } else {
        yield delay(2000)
        yield put(authActions.getError(true))
    }
    yield put(authActions.loading(false))
}

function* logOutWorker() {
    yield delay(2000)
    yield put(authActions.logOut())
}

export function* authWatcher() {
    yield takeEvery(asyncAuthTypes.ASYNC_LOG_IN, logInWorker)
    yield takeEvery(asyncAuthTypes.ASYNC_LOG_OUT, logOutWorker)
}