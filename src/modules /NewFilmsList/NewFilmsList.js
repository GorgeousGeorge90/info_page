import {useSelector} from "react-redux";
import {getNewFilms} from "../../selectors/searchSelectors";
import styles from './NewFilmList.module.scss';
import NewFilmLink from "./components/NewFilmLink/NewFilmLink";


const NewFilmsList = () => {
    const films = useSelector(state => getNewFilms(state))

    if (!films) {
        return 'Enter the film!'
    }

    return (
        <ul className={styles.list}>
            {
                films.map(film => <NewFilmLink key={film.id}
                                               title={film.title}
                />)
            }
        </ul>
    )
}

export default NewFilmsList