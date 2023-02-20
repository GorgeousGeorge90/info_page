import styles from './Header.module.scss';
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher";
import {NavLink} from 'react-router-dom';
import user from './../../assets/img/user.png';



const Header = ({children, isAuth}) => {

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
                            isAuth ? 'Free': 'Not authorised'
                        }
                    </div>
                </div>
                <nav className={styles.nav}>
                    <span><NavLink to={'/main'}>Films</NavLink></span>
                    <span><NavLink to={'#'}>Contacts</NavLink></span>
                </nav>
            </div>
        </header>
        {children}
    </>)
}

export default Header