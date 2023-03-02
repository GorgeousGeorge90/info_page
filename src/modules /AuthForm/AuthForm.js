import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import {asyncAuthActions} from "./store/actions";
import styles from './AuthFrom.module.scss';





const AuthForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            login: '',
            password: '',
        }
    });
    const dispatch = useDispatch()
    const onClick = data => {
            dispatch(asyncAuthActions.asyncLogIn(data))
            reset()
    }

    return (<form onSubmit={handleSubmit(onClick)}
                  className={styles.form}
        >
        <input type='text'
               placeholder='Login'
               {...register('login')}
        />
        <input type="text"
               placeholder='Password'
               {...register('password')}
        />
        <button>Enter</button>
        <span data-description={
           `Login: Egor 
            Password: 1 2 3 4 5`
        }>?</span>
    </form>)
}

export default AuthForm