import {all} from 'redux-saga/effects';
import { authWatcher } from '../../modules /AuthForm/store/authSaga';
import { mainWatcher } from '../../modules /MainFilmsWrapper/store/mainSaga';
import {commentsWatcher} from '../../modules /Comments/store/commentsSaga';
import {phraseWatcher} from '../../modules /Phrase/store/phraseSaga';
import {searchWatcher} from "../../modules /SearchForm/store/searchSaga";


export function* rootWatcher() {
    yield all([authWatcher(), mainWatcher(), commentsWatcher(), phraseWatcher(), searchWatcher()])
}


