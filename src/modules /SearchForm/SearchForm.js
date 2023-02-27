import useInput from '../../helpers/useInput/useInput';
import {useDispatch} from "react-redux";
import {asyncSearchActions} from './store/actions';




const SearchForm = () => {

    const dispatch = useDispatch()
    const {value,onChange,reset} = useInput('')

    const handleClick = () => {
        dispatch(asyncSearchActions.getNewCard(value))
        reset()
    }

    // const onClick = async (name) => {
    //     const response = await searchApi.getNewFilm(name)
    //     console.log(response)
    // }

    return <>
        <input type="text"
               placeholder='Enter new film'
               value={value}
               onChange={onChange}
        />
        <button onClick={handleClick}>Find</button>
    </>
}

export default SearchForm