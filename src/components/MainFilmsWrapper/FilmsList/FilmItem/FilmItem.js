import styles from './FilmItem.module.scss';
import {useDispatch} from "react-redux";
import {mainActions} from "../../../../store/mainReducer/actions";


const FilmItem = ({pic,name,rating,date, id}) => {
    const dispatch = useDispatch()
    const stat = Number(rating)*10

    const handleClick = () => {
        dispatch(mainActions.getSelected(id))
    }

    return (<li className={styles.film_item}>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${pic}`} alt='pic'/>
        </div>
        <div className={styles.name}>{name}</div>
        <div>{date}</div>
        <div className={styles.rating}>{stat}%</div>
        <button onClick={handleClick}>Info</button>
    </li>)
}

export default FilmItem