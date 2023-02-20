import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {getIsAuth, getProfile} from '../../selectors/authSelectors';
import {asyncAuthActions} from "./store/actions";
import styles from './AuthFrom.module.scss';
import {useEffect} from 'react';




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
            console.log('Wrong!')
            reset()
        }
    }

    return (<form onSubmit={handleSubmit(onClick)}
                  className={styles.form}
        >
        <input type='text'
               placeholder='login'
               {...register('login')}
        />
        <input type="text"
               placeholder='password'
               {...register('password')}
        />
        <button>
            {
                isAuth ? 'logout' : 'login'
            }
        </button>
    </form>)
}

export default AuthForm