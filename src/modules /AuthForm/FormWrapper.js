import AuthForm from "./AuthForm";
import Phrase from "../Phrase/Phrase";
import AuthError from "./components/AuthError/AuthError";


const FormWrapper = ({error, onClick}) => {

    return <>
        {
            error ? <AuthError onClick={onClick}/> : <>
                <AuthForm/>
                <Phrase/>
            </>
        }
    </>
}

export default FormWrapper