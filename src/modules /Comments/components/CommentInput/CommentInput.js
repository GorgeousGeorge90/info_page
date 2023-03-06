import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {asyncCommentsActions} from "../../store/actions";
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
            id: Date.now(),
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
               placeholder='Name'
               {...register('name')}
        />
        <textarea placeholder='Typing...'
                  {...register('title')}
        />
        <button>Comment</button>
    </form>)
}

export default CommentInput