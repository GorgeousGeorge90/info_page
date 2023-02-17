import './App.module.scss';
import AuthForm from "./components/AuthForm/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLoading} from "./selectors/authSelectors";
import Preloader from './components/common/Preloader/Preloader';
import styles from './App.module.scss';
import MainFilmsWrapper from "./components/MainFilmsWrapper/MainFilmsWrapper";
import {useEffect} from "react";
import {asyncCommentsActions} from "./store/commentsReducer/actions";
import supabase from "./api/client";
import {asyncMainActions} from "./store/mainReducer/actions";
import {commentsApi} from "./api/api";
import CommentInput from "./components/Comments/CommentInput/CommentInput";



function App() {
    const isAuth = useSelector(state=>getIsAuth(state))
    const loading = useSelector(state=>getLoading(state))
    const dispatch = useDispatch()


    useEffect( ()=> {
        dispatch(asyncCommentsActions.fetchComments())
    },[])



    return (
        <div className={styles.app_wrapper}>
            {
                isAuth ?  <MainFilmsWrapper/>: <AuthForm/>
            }
            {
                loading ? <Preloader/>: null
            }
            <CommentInput/>
        </div>
    );
}

export default App;
