import {
    stat
} from "fs";

const initState = {

    authError: null,

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Login_Error':
            console.log('Login Error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'Login_Success':
            console.log('login_Success');
            return {
                ...state,
                authError: null
            }
        case 'SignOut_Success':
            console.log("Signed out successfully");
            return state

        case 'Signup_Success':
            console.log('Signup Success')
            return {
                ...state,
                authError: null
            }
        case 'Signup_Failed':
        console.log('Signup Failed')
        return{
            ...state,
            authError:action.err.message
        }
        default:
            return state;
    }

}
export default authReducer