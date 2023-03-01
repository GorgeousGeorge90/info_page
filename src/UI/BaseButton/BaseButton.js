import styles from './BaseButton.module.scss';



const BaseButton = ({onClick, text}) => {

    return (<div className={styles.btn}>
            <button id={'btn'} onClick={onClick}/>
            <label htmlFor="btn">{text}</label>
        </div>)
}

export default BaseButton