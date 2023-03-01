import styles from './NewFilmLink.module.scss';




const NewFilmLink = ({title, handleClick}) => {
    return (<li className={styles.link}>
        <span onClick={handleClick}>{title}</span>
    </li>)
}

export default NewFilmLink