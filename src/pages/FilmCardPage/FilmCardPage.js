import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../../selectors/authSelectors';
import {useEffect} from 'react';
import SearchForm from "../../modules /NewFilmsList/components/SearchForm/SearchForm";
import styles from './FilmCardPage.module.scss';
import NewFilmsList from "../../modules /NewFilmsList/NewFilmsList";
import BasePreloader from "../../UI/BasePreloader/BasePreloader";


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