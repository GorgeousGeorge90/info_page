import { cardType } from './types';



const initialState = {
    card: null,
}


const filmCardReducer = (state=initialState, action) => {
    switch (action.type) {

        case cardType.GET_CARD:
            return {
                ...state,
                card: action.payload,
            }

        default:
            return state
    }
}

export default filmCardReducer