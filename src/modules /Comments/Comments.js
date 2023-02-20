import CommentItem from "./components/CommentItem /CommentItem";
import {useSelector} from "react-redux";
import {getComments} from "../../selectors/commentsSelectors";


const Comments = () => {
    const comments = useSelector(state=> getComments(state))

    if (!comments) {
        return <div>No comments yet!</div>
    }

    return (<ul>
        {
            comments.map(comment => <CommentItem key={comment.id}
                                                 id = {comment.id}
                                                 name = {comment.name}
                                                 title={comment.title}
            />)
        }
        </ul>)
}

export default Comments