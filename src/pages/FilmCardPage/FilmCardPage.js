import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getIsAuth} from '../../selectors/authSelectors';
import {useEffect, useState} from 'react';
import styles from './FilmCardPage.module.scss';
import NewFilmsList from "../../modules /NewFilmsList/NewFilmsList";
import Modal from "../../components/Modal/Modal";
import {getSelect} from "../../modules /NewFilmsList/selectors/selectors";
import FilmCard from "../../modules /FilmCard/FilmCard";
import {searchActions} from "../../modules /NewFilmsList/store/actions";


const FilmCardPage = () => {
    const isAuth = useSelector(state => getIsAuth(state))
    const selected = useSelector(state => getSelect(state))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])

    useEffect(()=> {
        if (selected) {
            setIsOpened(true)
        }
    },[selected])

    const [isOpened, setIsOpened] = useState(false)

    const closeCard = () => {
        dispatch(searchActions.selectCard(null))
        setIsOpened(false)
    }

    return (<div className={styles.container}>
        <NewFilmsList/>
        <Modal children={selected ? <FilmCard title={selected.title}
                                              img={selected.poster_path}
                                              overview={selected.overview}
                                              date={selected.release_date}
        /> : null}
               onClose={closeCard}
               isOpened={isOpened}
        />
    </div>)
}

export default FilmCardPage