import {useDispatch, useSelector} from 'react-redux';
import { getSeveralFilms } from '../../selectors/mainSelectors';
import FilmsList from './components/FilmsList/FilmsList';
import {useEffect} from "react";
import {asyncMainActions} from "./store/actions";
import styles from './MainFilmsWrapper.module.scss';


const MainFilmsWrapper = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncMainActions.fetchFilms())
    }, [])
    const films = useSelector(getSeveralFilms)

    return (<div className={styles.films}>
        <FilmsList films={films}/>
    </div>)
}

export default MainFilmsWrapper