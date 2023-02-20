import {put,call,takeEvery} from 'redux-saga/effects';
import {asyncCommentsTypes} from "./types";
import {authActions} from "../../AuthForm/store/actions";
import {commentsActions} from "./actions";
import {commentsApi} from "../../../api/api";



function* fetchCommentsWorker() {
    yield put(authActions.loading(true))
    const comments = yield call(commentsApi.getComments)
    yield put(commentsActions.getComment(comments))
    yield put(authActions.loading(false))
}

function* addCommentWorker() {
    yield put(authActions.loading(true))
    const newPost = yield call(commentsApi.addComment)
    yield put(commentsActions.addComment(newPost))
    yield put(authActions.loading(false))
}

export function* commentsWatcher() {
    yield takeEvery(asyncCommentsTypes.ASYNC_GET_COMMENTS, fetchCommentsWorker)
    yield takeEvery(asyncCommentsTypes.ASYNC_ADD_COMMENT, addCommentWorker)
}
