import AuthForm from '../../modules /AuthForm/AuthForm';
import Phrase from '../../modules /Phrase/Phrase';
import styles from './StartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getError, getLoading, getIsAuth} from "../../modules /AuthForm/selectors/authSelectors";
import BasePreloader from "../../UI/BasePreloader/BasePreloader";
import AuthError from "../../modules /AuthForm/components/AuthError/AuthError";
import {authActions} from "../../modules /AuthForm/store/actions";
import BaseError from "../../UI/BaseError/BaseError";
import FormWrapper from "../../modules /AuthForm/FormWrapper";



const StartPage = ()=> {
    const isAuth = useSelector(state=> getIsAuth(state))
    const loading = useSelector(state=> getLoading(state))
    const error =  useSelector(state=> getError(state))
    console.log(error)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=> {
        if (isAuth) {
            navigate('/main')
        }
    },[isAuth])

    const handleClick = ()=> {
        dispatch(authActions.getError(false))
    }


    return (<div className={styles.container}>
        {
          loading ? <BasePreloader text={'Waiting...'}/> : <FormWrapper onClick={handleClick}
                                                    error={error}
            />
        }
    </div>)
}

export default StartPage