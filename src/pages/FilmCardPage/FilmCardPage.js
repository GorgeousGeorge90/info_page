import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../../selectors/authSelectors';
import {useEffect} from 'react';
import SearchForm from "../../modules /SearchForm/SearchForm";
import styles from './FilmCardPage.module.scss';
import {searchApi} from "../../modules /SearchForm/api/api";
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
            <SearchForm/>
            <NewFilmsList/>
        </div>)
}

export default FilmCardPage