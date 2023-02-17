import { mainTypes } from './types';

const inititalState = {
    films:[],
    selected:null,
}

const mainReducer = (state=inititalState, action)=> {
    switch (action.type) {

        case mainTypes.GET_FILMS:
            return {
                ...state,
                films: action.payload,
            }

        case mainTypes.GET_SELECTED:
            return {
                ...state,
                selected: state.films.reduce((acc,film)=> {
                    if (film.id === action.payload) {
                        acc = film
                    }

                    return acc
                })
            }

        default:
            return  state
    }
}

export default mainReducer