import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const movieApi = {
    getTopMovies: ()=> instance('tv/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83&language=en-US&page=1')
}

