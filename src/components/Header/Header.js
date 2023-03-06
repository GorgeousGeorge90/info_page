import styles from './Header.module.scss';
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher";
import { NavLink } from 'react-router-dom';
import off from './../../assets/img/off.png';
import logIn from './../../assets/img/logIn.png';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../selectors/authSelectors";
import {useEffect} from "react";
import BaseButton from "../../UI/BaseButton/BaseButton";
import {asyncAuthActions} from "../../modules /AuthForm/store/actions";



const Header = ({children}) => {
    const isAuth = useSelector(state=>getIsAuth(state))
    const dispatch = useDispatch()
    useEffect(()=> {
    },[isAuth])

    const handleClick = e => {
        return !isAuth ? e.preventDefault(): null
    }

    const onClick = () => dispatch(asyncAuthActions.asyncLogOut())

    return (<>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>Movie Lab</h3>
                    <p>Welcome!</p>
                </div>
                <div className={styles.btn}>
                    <ThemeSwitcher/>
                </div>
                <div className={styles.icon}>
                    <img src={ isAuth ? logIn:off} alt='user'/>
                    <div>
                        {
                            isAuth ? <BaseButton text={'Exit'}
                                                 onClick={onClick}
                            />: 'Offline'
                        }
                    </div>
                </div>
                <nav className={styles.nav}>
                    <NavLink onClick={handleClick} to={'/main'}>Films</NavLink>
                    <NavLink to={'/film_card'}>FilmCard</NavLink>
                    <NavLink to={'/users_advice'}>UsersAdvice</NavLink>
                </nav>
            </div>
        </header>
        {children}
    </>)
}

export default Header