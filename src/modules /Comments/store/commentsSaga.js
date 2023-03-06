import {put,call,takeEvery} from 'redux-saga/effects';
import {asyncCommentsTypes} from "./types";
import {commentsActions} from "./actions";
import {commentsApi} from "../api/api";


function* fetchCommentsWorker() {
    yield put(commentsActions.isProcess(true))
    const comments = yield call(commentsApi.getComments)
    yield put(commentsActions.getComment(comments))
    yield put(commentsActions.isProcess(false))
}

function* addCommentWorker(action) {
    yield put(commentsActions.isProcess(true))
    const newPost = yield call(commentsApi.addComment, action.payload)
    yield put(commentsActions.addComment(newPost))
    yield put(commentsActions.isProcess(false))
}

function* updateCommentWorker(action) {
    const {id,text} = action.payload
    yield put(commentsActions.isProcess(true))
    yield call(commentsApi.updateComment, id,text)
    yield put(commentsActions.updateComment(action.payload))
    yield put(commentsActions.isProcess(false))
}

function* deleteCommentWorker(action) {
    yield put(commentsActions.isProcess(true))
    yield call(commentsApi.deleteComment, action.payload)
    yield put(commentsActions.deleteComment(action.payload))
    yield put(commentsActions.isProcess(false))
}



export function* commentsWatcher() {
    yield takeEvery(asyncCommentsTypes.ASYNC_GET_COMMENTS, fetchCommentsWorker)
    yield takeEvery(asyncCommentsTypes.ASYNC_ADD_COMMENT, addCommentWorker)
    yield takeEvery(asyncCommentsTypes.ASYNC_UPDATE_COMMENT, updateCommentWorker)
    yield takeEvery(asyncCommentsTypes.ASYNC_DELETE_COMMENT, deleteCommentWorker)
}
