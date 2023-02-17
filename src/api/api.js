import axios from 'axios';
import supabase from "./client";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const movieApi = {
    getTopMovies: ()=> instance('tv/popular?api_key=bd3e8033318000fc97ee3efcc6c6af83&language=en-US&page=1')
}

export const commentsApi = {
    getComments: async ()=> {
        const {data:comments} = await supabase
            .from('comments')
            .select('*')
        return comments
    },
    addComment: async ()=> {
        const newPost = {
            name: 'George',
            title: 'Nice!'
        }
        const {data} = await supabase
            .from('comments')
            .insert([newPost])
        return newPost
    }
}
