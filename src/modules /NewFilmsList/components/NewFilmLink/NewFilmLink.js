import styles from './NewFilmLink.module.scss';
import { ReactComponent as Star } from './../../../../assets/img/star.svg';


const NewFilmLink = ({title,date, rating, handleClick}) => {
    const rate = Math.round(rating)
    return (<li className={styles.link}>
        <span onClick={handleClick}
              className={styles.title}
        >{title}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.rating}>
            {
                rate === 0 ? 'no rating' : <><Star/>{rate}</>
            }
        </span>
    </li>)
}

export default NewFilmLink