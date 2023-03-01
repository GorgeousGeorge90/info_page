import styles from './BaseError.module.scss';




const BaseError = ({content, onClick}) => {

    return (<div className={styles.error}>
        <h3>Error!</h3>
        <p>
            {content}
            <span onClick={onClick}>x</span>
        </p>
    </div>)
}

export default BaseError