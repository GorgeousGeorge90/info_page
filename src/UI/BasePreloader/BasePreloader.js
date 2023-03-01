import styles from './BasePreloader.module.scss';



const BasePreloader = ({text}) => {

    return (<div className={styles.loader}>
        <div className={styles.ring}></div>
        <span className={styles.text}>{text}</span>
    </div>)
}

export default BasePreloader