import {useDispatch, useSelector} from 'react-redux';
import {getAllFims, getSeveralFilms} from '../../selectors/mainSelectors';
import FilmsList from './FilmsList/FilmsList';
import {useEffect} from "react";
import {asyncMainActions} from "../../store/mainReducer/actions";


const MainFilmsWrapper = () => {
    const dispatch = useDispatch()
    useEffect( ()=> {
        dispatch(asyncMainActions.fetchFilms())
    },[])
    const films = useSelector(getSeveralFilms)

    return <FilmsList films={films}/>
}

export default MainFilmsWrapper