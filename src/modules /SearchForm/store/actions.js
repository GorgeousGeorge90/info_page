import { asyncSearchType, searchTypes } from './types';

export const asyncSearchActions = {
    getNewCard:() => ({type: asyncSearchType.GET_NEW_CARD})
}

export const searchActions = {
    isFetching: payload => ({type: searchTypes.IS_FETCHING, payload}),
    getFilm: payload => ({type: searchTypes.GET_CARD, payload})
}