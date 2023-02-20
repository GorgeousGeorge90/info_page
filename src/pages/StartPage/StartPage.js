import AuthForm from '../../modules /AuthForm/AuthForm';
import Phrase from '../../modules /Phrase/Phrase';
import styles from './StartPage.module.scss';


const StartPage = ()=> {

    return (<div className={styles.container}>
        <AuthForm/>
        <Phrase/>
    </div>)
}

export default StartPage