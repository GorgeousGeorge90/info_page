import supabase from "./client";


export const commentsApi = {
    getComments: async ()=> {
        const {data:comments} = await supabase
            .from('comments')
            .select('*')
        return comments
    },
    addComment: async (newPost)=> {
        const {data} = await supabase
            .from('comments')
            .insert([newPost])
        return newPost
    },
    deleteComment: async (id)=> {
        let { data } = await supabase
            .from('comments')
            .delete()
            .eq('id',id)
    },
    updateComment: async (id, text)=> {
        const { data } = await supabase
            .from('comments')
            .update({ 'title':text})
            .eq('id', id)
    }
}
