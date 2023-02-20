import { phraseTypes } from './types';


const initialState = {
    phrase:null,
}

const phraseReducer = (state=initialState, action) => {
    switch(action.type) {

        case phraseTypes.GET_PHRASE:
            return {
                ...state,
                phrase:action.payload,
            }

        default:
            return state

    }
}

export default phraseReducer