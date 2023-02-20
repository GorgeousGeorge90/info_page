import { commentsTypes } from './types';
import nanoid from 'nanoid';


const initialState = {
    comments:[]
}


const commentsReducer = (state=initialState,action) => {
    switch (action.type) {

        case commentsTypes.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }

        case commentsTypes.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }

        case commentsTypes.UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.payload.id) {
                        return {
                            ...comment,
                            title: action.payload.title
                        }
                    }

                    return comment
                })
            }

        case commentsTypes.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment=> comment.id !== action.payload)
            }

        default:
            return state
    }
}

export default commentsReducer