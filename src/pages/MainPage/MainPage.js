import MainFilmsWrapper from '../../modules /MainFilmsWrapper/MainFilmsWrapper';
import styles from './MainPage.module.scss';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../../selectors/authSelectors';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
    const isAuth = useSelector(state=> getIsAuth(state))
    const navigate = useNavigate()
    useEffect(()=> {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (<div className={styles.container}>
        <MainFilmsWrapper/>
    </div>)
}

export default MainPage