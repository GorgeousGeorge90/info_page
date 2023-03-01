import Alert from '../../../../UI/Alert/Alert';
import BaseError from '../../../../UI/BaseError/BaseError';


const AuthError = ({onClick}) => {

    return <Alert>
        <BaseError content={'Wrong data!'}
                   onClick={onClick}
        />
    </Alert>
}

export default AuthError