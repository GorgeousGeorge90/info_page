import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../../selectors/authSelectors';
import {useEffect} from 'react';
import styles from './FilmCardPage.module.scss';
import NewFilmsList from "../../modules /NewFilmsList/NewFilmsList";



const FilmCardPage = () => {
    const isAuth = useSelector(state => getIsAuth(state))
    const navigate = useNavigate()
    useEffect(()=> {
        if ( !isAuth ) {
            navigate('/')
        }
    }, [isAuth])


    return (<div className={styles.container}>
            <NewFilmsList/>
        </div>)
}

export default FilmCardPage