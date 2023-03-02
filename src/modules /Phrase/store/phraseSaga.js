import {call, takeEvery, put} from 'redux-saga/effects';
import {asyncPhraseTypes} from "./types";
import {phraseActions} from "./actions";
import {phraseApi} from "../api/api";


const randomQuote = Math.floor(Math.random()*10)

function* fetchWorker() {
    const data = yield call(phraseApi.takePhrase)
    yield put(phraseActions.getPhrase(data.data[randomQuote]))
}

export function* phraseWatcher() {
    yield takeEvery(asyncPhraseTypes.FETCH_PHRASE, fetchWorker)
}