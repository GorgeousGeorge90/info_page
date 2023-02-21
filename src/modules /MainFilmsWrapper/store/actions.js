import { mainTypes, asyncMainTypes } from './types';

export const mainActions = {
    getFilms:payload => ({type:mainTypes.GET_FILMS, payload}),
    getSelected:payload => ({type:mainTypes.GET_SELECTED, payload}),
    isLoading: payload => ({type:mainTypes.IS_LOADING, payload})
}

export const asyncMainActions = {
    fetchFilms:()=> ({type:asyncMainTypes.FETCH_TOP_FILMS})
}