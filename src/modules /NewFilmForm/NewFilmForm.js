import useInput from '../../helpers/useInput/useInput';



const NewFilmForm = () => {
    const value = useInput('')

    return <>
        <input type="text"
               placeholder='Enter new film'
               {...value}
        />
        <button>Get it!</button>
    </>
}

export default NewFilmForm