import { authTypes } from './types';


const initialState = {
    profile: {
        login: 'Egor',
        password: '12345',
    },
    isAuth:false,
    loading:false,
    error:false,
}

const authReducer = (state=initialState, action)=> {
    switch (action.type) {

        case authTypes.LOG_IN:
            return {
                ...state,
                isAuth: true,
            }

        case authTypes.LOG_OUT:
            return {
                ...state,
                isAuth: false,
            }

        case authTypes.LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        case authTypes.GET_ERROR:
            return {
                ...state,
                error: action.payload,
            }


        default:
            return state
    }
}

export default authReducer