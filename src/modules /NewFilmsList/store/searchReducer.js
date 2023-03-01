import { searchTypes } from './types';

const initialState = {
    cards: null,
    isFetching: false,
    selected: null,
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

        case searchTypes.SELECT_CARD:
            return {
                ...state,
                selected: action.payload,
            }

        default:
            return state
    }
}

export default searchReducer