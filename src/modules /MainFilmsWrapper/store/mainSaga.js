import {takeEvery, put, call} from 'redux-saga/effects';
import { asyncMainTypes } from './types';
import {movieApi} from "../../../api/api";
import {mainActions} from "./actions";


function* fetchFilmsWorker() {
    yield put(mainActions.isLoading(true))
    const data = yield call(movieApi.getTopMovies)
    yield put(mainActions.getFilms(data.data.results))
    yield put(mainActions.isLoading(false))
}

export function* mainWatcher() {
    yield takeEvery(asyncMainTypes.FETCH_TOP_FILMS, fetchFilmsWorker)
}