import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {getIsAuth, getProfile} from '../../selectors/authSelectors';
import {asyncAuthActions, authActions} from "./store/actions";
import styles from './AuthFrom.module.scss';





const AuthForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            login: '',
            password: '',
        }
    });
    const profile = useSelector(state => getProfile(state))
    const isAuth = useSelector(state => getIsAuth(state))
    const dispatch = useDispatch()
    const onClick = data => {
        if ( JSON.stringify(data) === JSON.stringify(profile) ) {
            dispatch(asyncAuthActions.asyncLogIn())
            reset()
        } else {
            dispatch(authActions.getError(true))
            reset()
        }
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