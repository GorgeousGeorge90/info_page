import './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLoading} from "./selectors/authSelectors";
import Preloader from './UI/Preloader/Preloader';
import styles from './App.module.scss';
import {useEffect} from "react";
import {asyncCommentsActions} from "./modules /Comments/store/actions";
import MainPage from "./pages/MainPage/MainPage";
import StartPage from "./pages/StartPage/StartPage";
import useInput from "./helpers/useInput/useInput";
import useTheme from "./helpers/useTheme/useTheme";
import ThemeSwitcher from "./UI/ThemeSwitcher/ThemeSwitcher";
import Header from "./components/Header/Header";



function App() {
    const isAuth = useSelector(state=>getIsAuth(state))
    const loading = useSelector(state=>getLoading(state))
    const dispatch = useDispatch()


    useEffect( ()=> {
        dispatch(asyncCommentsActions.fetchComments())
    },[])


    return (
        <div className={styles.app}>
            <Header isAuth={isAuth}/>
            <StartPage/>
            <MainPage/>
            {
                loading ? <Preloader/>: null
            }
            {/*<CommentInput/>*/}
        </div>
    );
}

export default App;
