import {useEffect, useState} from 'react';


const useTheme = () => {
    const [theme, setTheme] = useState('dark')
    useEffect(()=> {
        document.body.setAttribute(`data-theme`, theme)
    },[theme])

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return [theme,toggleTheme]
}

export default useTheme