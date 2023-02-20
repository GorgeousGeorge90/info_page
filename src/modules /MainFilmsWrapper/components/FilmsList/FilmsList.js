import FilmItem from './FilmItem/FilmItem';
import styles from './FilmsList.module.scss';


const FilmsList = ({films}) => {

    return (<ul className={styles.container}>
        {
            films.map(film => <FilmItem key={film.id}
                                        id={film.id}
                                        name={film.name}
                                        pic={film.poster_path}
                                        rating={film.vote_average}
                                        date={film.first_air_date}
            />)
        }
    </ul>)
}

export default FilmsList