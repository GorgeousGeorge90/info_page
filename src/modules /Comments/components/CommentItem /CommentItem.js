import styles from './CommentItem.module.scss';
import {ReactComponent as Delete} from './../../../../assets/img/delete.svg';
import {ReactComponent as Edit} from './../../../../assets/img/edit.svg';
import {useState} from "react";



const CommentItem = ({name, title, id, deleteItem, updateItem}) => {
    const [editMode, setEditMode] = useState(false)
    const [text, setText ] = useState('')

    const onBlur = () => {
        const payload = {id, text}
        updateItem(payload)
        setEditMode(false)
    }

    return (<li className={styles.comment}>
        <div className={styles.name}>{name}:</div>
        {
            editMode ? <input type="text"
                              value={text}
                              onChange={e => setText(e.target.value)}
                              autoFocus={true}
                              onBlur={onBlur}

                />
             : <div className={styles.title}>{title}</div>
        }
        <div className={styles.edit}
             role={'button'}
             onClick={()=>setEditMode(true)}
        >
            <Edit/>
        </div>
        <div className={styles.btn}
             role={'button'}
             onClick={()=>deleteItem(id)}><Delete/></div>
    </li>)
}

export default CommentItem