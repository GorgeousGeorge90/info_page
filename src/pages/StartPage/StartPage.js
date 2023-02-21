import AuthForm from '../../modules /AuthForm/AuthForm';
import Phrase from '../../modules /Phrase/Phrase';
import styles from './StartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getIsAuth} from "../../selectors/authSelectors";
import {useEffect} from "react";


const StartPage = ()=> {
    const isAuth = useSelector(state=> getIsAuth(state))
    const navigate = useNavigate()
    useEffect(()=> {
        if (isAuth) {
            navigate('/main')
        }
    },[isAuth])

    return (<div className={styles.container}>
        <AuthForm/>
        <Phrase/>
    </div>)
}

export default StartPage