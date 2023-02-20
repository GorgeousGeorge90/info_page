import {useSelector, useDispatch} from 'react-redux';
import {getPhrase} from "./selectors/selectors";
import {asyncPhraseActions} from "./store/actions";
import styles from './Phrase.module.scss';
import {useEffect} from 'react';


const Phrase = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(asyncPhraseActions.fetchPhrase())
    },[])

    const phrase = useSelector(state=>getPhrase(state))

    if (!phrase) {
        return <div>
            We don't have any phrase(
        </div>
    }

    return (<div className={styles.phrase}>
        <h3>{phrase.text}</h3>
        <p>{phrase.author}</p>
    </div>)
}

export default Phrase