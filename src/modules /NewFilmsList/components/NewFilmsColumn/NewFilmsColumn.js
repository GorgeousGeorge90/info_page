import NewFilmLink from "../NewFilmLink/NewFilmLink";
import {searchActions} from "../../store/actions";
import {useDispatch} from "react-redux";
import styles from './NewFilmsColumn.module.scss';


const NewFilmsColumn = ({data}) => {
    const dispatch = useDispatch()

    return (<ul className={styles.container}>
        {
            data.map(item => <NewFilmLink key={item.id}
                                          title={item.title}
                                          rating={item.vote_average}
                                          date={item.release_date}
                                          handleClick={()=>dispatch(searchActions.selectCard(item))}
                />
            )
        }
    </ul>)
}

export default NewFilmsColumn
