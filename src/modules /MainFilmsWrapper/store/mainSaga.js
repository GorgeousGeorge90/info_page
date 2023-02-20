import {takeEvery, put, call} from 'redux-saga/effects';
import { asyncMainTypes } from './types';
import { authActions } from '../../AuthForm/store/actions';
import {movieApi} from "../../../api/api";
import {mainActions} from "./actions";


function* fetchFilmsWorker() {
    yield put(authActions.loading(true))
    const data = yield call(movieApi.getTopMovies)
    yield put(mainActions.getFilms(data.data.results))
    yield put(authActions.loading(false))
}

export function* mainWatcher() {
    yield takeEvery(asyncMainTypes.FETCH_TOP_FILMS, fetchFilmsWorker)
}