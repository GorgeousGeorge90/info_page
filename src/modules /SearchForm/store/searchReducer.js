import { searchTypes } from './types';

const initialState = {
    cards: null,
    isFetching: false,
}

const searchReducer = (state = initialState , action) => {
    switch (action.type) {

        case searchTypes.GET_CARD:
            return {
                ...state,
                cards: action.payload,
            }

        case searchTypes.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }


        default:
            return state
    }
}

export default searchReducer