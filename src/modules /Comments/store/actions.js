import {asyncCommentsTypes, commentsTypes} from "./types";

export const commentsActions = {
    getComment: payload => ({type:commentsTypes.GET_COMMENTS, payload}),
    addComment: payload => ({type:commentsTypes.ADD_COMMENT, payload}),
    deleteComment: payload => ({type:commentsTypes.DELETE_COMMENT, payload}),
    updateComment: payload => ({type:commentsTypes.UPDATE_COMMENT, payload}),
    isProcess: payload => ({type:commentsTypes.IS_PROCESS, payload}),
    setEditMode: payload => ({type: commentsTypes.EDIT_MODE, payload})
}

export const asyncCommentsActions = {
    fetchComments: ()=> ({type:asyncCommentsTypes.ASYNC_GET_COMMENTS}),
    asyncAddComment: payload=> ({type:asyncCommentsTypes.ASYNC_ADD_COMMENT, payload}),
    asyncUpdateComment: payload=> ({type:asyncCommentsTypes.ASYNC_UPDATE_COMMENT, payload}),
    asyncDeleteComment: payload => ({type:asyncCommentsTypes.ASYNC_DELETE_COMMENT, payload}),
}