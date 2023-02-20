import axios from 'axios';


export const phraseApi = {
    takePhrase: () => axios.get(`https://type.fit/api/quotes`)
}