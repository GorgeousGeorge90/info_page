import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})


export const searchApi = {
    getNewFilm: () => instance.get(`search/movie?api_key=bd3e8033318000fc97ee3efcc6c6af83&query=Spider man`)
}