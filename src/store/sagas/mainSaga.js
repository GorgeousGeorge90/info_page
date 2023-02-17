import {takeEvery, put, call} from 'redux-saga/effects';
import { asyncMainTypes } from './../mainReducer/types';
import { authActions } from './../authReducer/actions';
import {movieApi} from "../../api/api";
import {mainActions} from "../mainReducer/actions";


function* fetchFilmsWorker() {
    yield put(authActions.loading(true))
    const data = yield call(movieApi.getTopMovies)
    yield put(mainActions.getFilms(data.data.results))
    yield put(authActions.loading(false))
}

export function* mainWatcher() {
    yield takeEvery(asyncMainTypes.FETCH_TOP_FILMS, fetchFilmsWorker)
}