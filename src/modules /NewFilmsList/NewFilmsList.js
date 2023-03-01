import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getNewFilms} from "../../selectors/searchSelectors";
import styles from './NewFilmsList.module.scss';
import NewFilmLink from "./components/NewFilmLink/NewFilmLink";
import {useEffect} from "react";
import BasePreloader from "../../UI/BasePreloader/BasePreloader";
import SearchForm from "./components/SearchForm/SearchForm";
import {searchActions} from "./store/actions";


const NewFilmsList = () => {
    const films = useSelector(state => getNewFilms(state))
    const isFetching = useSelector(state=> getIsFetching(state))
    const dispatch = useDispatch()
    useEffect(()=>{},[films])


    return (<div className={styles.container}>
            <SearchForm/>
            {
                isFetching ? <BasePreloader text={'Loading...'}/> :
                !films ? 'No Films!':
                    <ul className={styles.list}>
                    {
                        films.map(film => <NewFilmLink key={film.id}
                                                       title={film.title}
                                                       handleClick={()=>dispatch(searchActions.selectCard(film))}
                        />)
                    }
                    </ul>
            }
        </div>
    )
}

export default NewFilmsList