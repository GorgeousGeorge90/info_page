import { authTypes, asyncAuthTypes } from './types';

export const authActions = {
    logIn:() => ({type: authTypes.LOG_IN}),
    logOut:() => ({type: authTypes.LOG_OUT}),
    loading:payload => ({type: authTypes.LOADING, payload}),
    getError: payload => ({type: authTypes.GET_ERROR, payload})
}

export const asyncAuthActions = {
    asyncLogIn:() => ({type: asyncAuthTypes.ASYNC_LOG_IN}),
    asyncLogOut:() => ({type: asyncAuthTypes.ASYNC_LOG_OUT}),
}