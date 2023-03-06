import useInput from "../../../../utils&helpers/useInput/useInput";



const NewTitleInput = ({onBlur}) => {
    const {value,onChange} = useInput()

    return <input type="text"
                                 placeholder='typing...'
                                 value={value}
                                 onChange={onChange}
                                 onBlur={onBlur}
            />
}

export default NewTitleInput