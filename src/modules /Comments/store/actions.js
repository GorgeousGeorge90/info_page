import {asyncCommentsTypes, commentsTypes} from "./types";

export const commentsActions = {
    getComment: payload => ({type:commentsTypes.GET_COMMENTS, payload}),
    addComment: payload => ({type:commentsTypes.ADD_COMMENT, payload}),
    deleteComment: payload => ({type:commentsTypes.DELETE_COMMENT, payload}),
    updateComment: payload => ({type:commentsTypes.UPDATE_COMMENT, payload}),
}

export const asyncCommentsActions = {
    fetchComments: ()=> ({type:asyncCommentsTypes.ASYNC_GET_COMMENTS}),
    asyncAddComment: payload=> ({type:asyncCommentsTypes.ASYNC_ADD_COMMENT, payload})
}