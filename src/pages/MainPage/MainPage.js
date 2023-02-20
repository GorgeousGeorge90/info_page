import MainFilmsWrapper from '../../modules /MainFilmsWrapper/MainFilmsWrapper';
import styles from './MainPage.module.scss';




const MainPage = () => {
    return (<div className={styles.container}>
        <MainFilmsWrapper/>
    </div>)
}

export default MainPage