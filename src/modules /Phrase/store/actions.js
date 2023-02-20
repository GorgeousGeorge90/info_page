import {phraseTypes , asyncPhraseTypes} from './types';


export const phraseActions = {
    getPhrase: payload => ({type: phraseTypes.GET_PHRASE, payload})
}

export const asyncPhraseActions = {
    fetchPhrase: () => ({type: asyncPhraseTypes.FETCH_PHRASE})
}