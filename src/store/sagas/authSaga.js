import { takeEvery, put } from 'redux-saga/effects';
import {asyncAuthTypes } from '../authReducer/types';
import {authActions} from "../authReducer/actions";



const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

function* logInWorker() {
    yield put(authActions.loading(true))
    yield delay(3000)
    yield put(authActions.logIn())
    yield put(authActions.loading(false))
}

function* logOutWorker() {
    yield put(authActions.loading(true))
    yield delay(3000)
    yield put(authActions.logOut())
    yield put(authActions.loading(false))
}

export function* authWatcher() {
    yield takeEvery(asyncAuthTypes.ASYNC_LOG_IN, logInWorker)
    yield takeEvery(asyncAuthTypes.ASYNC_LOG_OUT, logOutWorker)
}