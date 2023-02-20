import useTheme from "../../helpers/useTheme/useTheme";
import {ReactComponent as SunIcon} from './../../assets/img/icon-sun.svg';
import {ReactComponent as MoonIcon} from './../../assets/img/icon-moon.svg';
import styles from './ThemeSwitcher.module.scss';


const ThemeSwitcher = () => {
    const [theme,toggleTheme] = useTheme('dark')

    const Icon = () => theme === 'light' ? <SunIcon/>: <MoonIcon/>

    return (<div className={styles.btn}>
            <button onClick={toggleTheme}><Icon/>{theme}</button>
        </div>)
}

export default ThemeSwitcher