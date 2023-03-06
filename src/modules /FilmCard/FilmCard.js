import styles from './FilmCard.module.scss';



const FilmCard = ({title, date, overview, vote, img})=> {

    return (<div className={styles.card}>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt='pic'/>
            <h3>{title}</h3>
            <p>{overview}</p>
            <p>
                <span>{date}</span>
                <span>{vote}</span>
            </p>
        </div>)
}

export default FilmCard