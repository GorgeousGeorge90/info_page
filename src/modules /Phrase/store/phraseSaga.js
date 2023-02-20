import {call, takeEvery, put} from 'redux-saga/effects';
import {asyncPhraseTypes} from "./types";
import {authActions} from "../../AuthForm/store/actions";
import {phraseActions} from "./actions";
import {phraseApi} from "../api/api";


const randomQuote = Math.floor(Math.random()*10)

function* fetchWorker() {
    yield put(authActions.loading(true))
    const data = yield call(phraseApi.takePhrase)
    yield put(phraseActions.getPhrase(data.data[randomQuote]))
    yield put(authActions.loading(false))
}

export function* phraseWatcher() {
    yield takeEvery(asyncPhraseTypes.FETCH_PHRASE, fetchWorker)
}