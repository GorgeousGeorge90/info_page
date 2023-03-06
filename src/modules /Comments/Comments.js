import CommentItem from "./components/CommentItem /CommentItem";
import {useDispatch, useSelector} from "react-redux";
import styles from './Comments.module.scss';
import CommentInput from "./components/CommentInput/CommentInput";
import {getComments, getEditMode, getProcess} from './selectors/selectors';
import {asyncCommentsActions} from "./store/actions";
import {useEffect} from "react";


const Comments = () => {
    const comments = useSelector(state=> getComments(state))
    const isProcess = useSelector(state=>getProcess(state))
    const editMode = useSelector(state=>getEditMode(state))
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(asyncCommentsActions.fetchComments())
    },[])

    if (!comments) {
        return <div>No comments yet!</div>
    }

    const updateComment = (payload)=> {
        dispatch(asyncCommentsActions.asyncUpdateComment(payload))
    }


    const deleteComment = (id)=> {
        dispatch(asyncCommentsActions.asyncDeleteComment(id))
    }

    return (
        <div className={styles.container}>
            <CommentInput/>
        <ul>
        {
            comments.map(comment => <CommentItem key={comment.id}
                                                 id = {comment.id}
                                                 name = {comment.name}
                                                 title={comment.title}
                                                 deleteItem={deleteComment}
                                                 updateItem={updateComment}
            />)
        }
        </ul>
        </div>)
}

export default Comments