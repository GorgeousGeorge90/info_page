import { put, takeEvery, call} from "redux-saga/effects";
import { asyncSearchType } from './types';
import { searchActions } from './actions';
import axios from "axios";


const delay = ms => new Promise((resolve)=> setTimeout(()=> resolve(), ms))

async function fetchFilm(name) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bd3e8033318000fc97ee3efcc6c6af83&query=${name}`)
    return response
}

function* newFilmWorker(action) {
    yield put(searchActions.isFetching(true))
    let response = yield call(fetchFilm, action.payload)
    yield delay(3000)
    yield put(searchActions.getFilm(response.data.results))
    yield console.log(response.data.results)
    yield put(searchActions.isFetching(false))
}



export function* searchWatcher() {
    yield takeEvery( asyncSearchType.GET_NEW_CARD, newFilmWorker)
}