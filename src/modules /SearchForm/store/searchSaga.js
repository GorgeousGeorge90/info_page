import { put, takeEvery, call} from "redux-saga/effects";
import { asyncSearchType } from './types';
import { searchApi } from "../api/api";
import { searchActions } from './actions';


async function fetchFilm(name) {
    const response = await searchApi.getNewFilm(name)
    return response
}

function* newFilmWorker() {
    yield put(searchActions.isFetching(true))
    let response = yield call(fetchFilm)
    yield put(searchActions.getFilm(response.data.results))
    yield put(searchActions.isFetching(false))
}



export function* searchWatcher() {
    yield takeEvery( asyncSearchType.GET_NEW_CARD, newFilmWorker)
}