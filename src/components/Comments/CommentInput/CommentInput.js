import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {asyncCommentsActions, commentsActions} from "../../../store/commentsReducer/actions";
import styles from './CommentInput.module.scss';


const CommentInput = () => {
    const dispatch = useDispatch()
    const {register, reset, handleSubmit, formState:{errors}} = useForm({
        initialState: {
            name: '',
            title: '',
        }
    })

    const handleClick = data => {
        const payload = {
            name: data.name,
            title: data.title,
        }
        dispatch(asyncCommentsActions.asyncAddComment(payload))
        reset()
    }

    return (<form onSubmit={handleSubmit(handleClick)}
                  className={styles.form}
    >
        <input type="text"
               placeholder='name'
               {...register('name')}
        />
        <textarea placeholder='Title'
                  {...register('title')}
        />
        <button>Create comment</button>
    </form>)
}

export default CommentInput