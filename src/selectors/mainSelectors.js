import {createSelector} from 'reselect';


export const getAllFilms = state => state.main.films
export const getSelect = state => state.main.selected


export const getSeveralFilms = createSelector(
    getAllFilms, films=>
        films.filter(film=> films.indexOf(film) < 12)
    )
