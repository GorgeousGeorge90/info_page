import {useSelector} from "react-redux";
import {getIsFetching, getNewFilms} from "../../selectors/searchSelectors";
import styles from './NewFilmsList.module.scss';
import BasePreloader from "../../UI/BasePreloader/BasePreloader";
import SearchForm from "./components/SearchForm/SearchForm";
import NewFilmsColumn from "./components/NewFilmsColumn/NewFilmsColumn";
import dataCreater from "./helpers/dataCreater";


const NewFilmsList = () => {
    const films = useSelector(state => getNewFilms(state))
    const isFetching = useSelector(state=> getIsFetching(state))
    const data_column = dataCreater(films)

    return (<div className={styles.container}>
            <div className={styles.form}>
                <SearchForm/>
            </div>
            {
                isFetching ? <BasePreloader text={'Loading...'}/> :
                !data_column ? 'No request' :
                    <div className={styles.list}>
                        {
                            data_column.map(item=> <NewFilmsColumn key={item.id}
                                                                   data={item.data}
                            />)
                        }
                    </div>
            }
        </div>
    )
}

export default NewFilmsList