import styles from './BaseButton.module.scss';



const BaseButton = ({name,onClick}) => {

    return (<div className={styles.btn}>
            <button onClick={onClick}>{name}</button>
        </div>)
}

export default BaseButton