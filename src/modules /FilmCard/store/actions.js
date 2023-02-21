import { cardType } from './types';


export const cardActions = {
    getCard: payload => ({type: cardType.GET_CARD, payload})
}