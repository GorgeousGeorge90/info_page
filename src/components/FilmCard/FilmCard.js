import styles from './FilmCard.module.scss';



const FilmCard = ({img,name,text})=> {

    return (<div className={styles.card}>
            <div>
                <img src={img}/>
            </div>
            <div>{name}</div>
            <div>{text}</div>
        </div>)
}

export default FilmCard