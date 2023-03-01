import useInput from '../../../../helpers/useInput/useInput';
import {useDispatch} from "react-redux";
import {asyncSearchActions} from '../../store/actions';
import styles from './SearchForm.module.scss';
import {ReactComponent as Search} from './../../../../assets/img/search.svg'





const SearchForm = () => {

    const dispatch = useDispatch()
    const {value,onChange,reset} = useInput('')

    const handleClick = () => {
        console.log(value)
        dispatch(asyncSearchActions.getNewCard(value))
        reset()
    }

    return <div className={styles.search}>
        <input type="text"
               placeholder='Enter new film'
               value={value}
               onChange={onChange}
        />
        <button onClick={handleClick}><Search className={styles.icon}/></button>
    </div>
}

export default SearchForm