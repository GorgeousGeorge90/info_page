import Portal from "../../utils&helpers/Portal/Portal";
import styles from './Modal.module.scss';

const Modal = ({children, isOpened, onClose}) => {

    if (!isOpened) {
        return null
    }

    return <Portal>
        <div className={styles.container} role={'dialog'}>
            <div className={styles.overlay}
                 onClick={onClose}
                 role={'button'}
                 tabIndex={0}/>
            {children}
        </div>
    </Portal>
}

export default Modal