import { asyncSearchType, searchTypes } from './types';

export const asyncSearchActions = {
    getNewCard:(payload) => ({type: asyncSearchType.GET_NEW_CARD, payload})
}

export const searchActions = {
    isFetching: payload => ({type: searchTypes.IS_FETCHING, payload}),
    getFilm: payload => ({type: searchTypes.GET_CARD, payload}),
    selectCard: payload => ({type: searchTypes.SELECT_CARD, payload})
}