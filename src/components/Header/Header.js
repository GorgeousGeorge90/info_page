import styles from './Header.module.scss';
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher";
import { NavLink } from 'react-router-dom';
import user from './../../assets/img/user.png';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../selectors/authSelectors";
import {useEffect} from "react";
import BaseButton from "../../UI/BaseButton/BaseButton";
import {authActions} from "../../modules /AuthForm/store/actions";



const Header = ({children}) => {
    const isAuth = useSelector(state=>getIsAuth(state))
    const dispatch = useDispatch()
    useEffect(()=> {
    },[isAuth])

    const handleClick = e => {
        return !isAuth ? e.preventDefault(): null
    }

    const onClick = () => dispatch(authActions.logOut())

    return (<>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>KinoFan</h3>
                    <p>Welcome!</p>
                </div>
                <div className={styles.btn}>
                    <ThemeSwitcher/>
                </div>
                <div className={styles.icon}>
                    <img src={user} alt='user'/>
                    <div style={{color: 'white'}}>
                        {
                            isAuth ? <BaseButton name={'Free'}
                                                 onClick={onClick}
                            />: 'Off'
                        }
                    </div>
                </div>
                <nav className={styles.nav}>
                    <span><NavLink onClick={handleClick} to={'/main'}>Films</NavLink></span>
                    <span><NavLink to={'/film_card'}>FilmCard</NavLink></span>
                </nav>
            </div>
        </header>
        {children}
    </>)
}

export default Header