import styles from './NewFilmLink.scss';



const NewFilmLink = ({title}) => {

    return <li className={styles.link}>
        {title}
    </li>
}

export default NewFilmLink