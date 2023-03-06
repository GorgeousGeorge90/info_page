import styles from './UsersAdvicepage.module.scss';
import Comments from "../../modules /Comments/Comments";
import {useSelector} from "react-redux";
import {getProcess} from "../../modules /Comments/selectors/selectors";



const UsersAdvicePage = () => {
    const isProcess = useSelector(state=>getProcess(state))


    return <div className={styles.container}>
        <Comments/>
    </div>
}

export default UsersAdvicePage