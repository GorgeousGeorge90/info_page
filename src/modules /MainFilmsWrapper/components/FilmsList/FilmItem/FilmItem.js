import styles from './FilmItem.module.scss';
import {useDispatch} from "react-redux";
import {mainActions} from "../../../store/actions";


const FilmItem = ({pic,name,rating,date, id}) => {
    const dispatch = useDispatch()
    const stat = Number(rating)*10

    const handleClick = () => {
        dispatch(mainActions.getSelected(id))
    }

    return (<li className={styles.film_item}>
        <div onClick={handleClick} className={styles.card}>
            <img src={`https://image.tmdb.org/t/p/w500${pic}`} alt='pic'/>
            <span>{name}</span>
            <span>{date}</span>
        </div>
        <div className={styles.rating}>{stat}%</div>
    </li>)
}

export default FilmItem