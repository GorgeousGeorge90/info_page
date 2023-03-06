import { commentsTypes } from './types';



const initialState = {
    comments:[],
    isProcess: false,
    editMode:false,
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
            const {id,text} = action.payload
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === id) {
                        return {
                            ...comment,
                            title: text,
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

        case commentsTypes.EDIT_MODE:
            return {
                ...state,
                editMode: action.payload,
            }

        default:
            return state
    }
}

export default commentsReducer