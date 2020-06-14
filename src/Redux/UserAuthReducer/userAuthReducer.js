import {
    REQUEST_SENT,
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER, 
    LOGIN_ERROR, 
    SIGNUP_ERROR
} from './action'



const initialState = {
    isLoading : false,
    loginToken : '',
    user : {},
    error : ''
}

export default function authReducer( state = initialState , { type , payload }){

    console.log(type," is action type while payload is ",payload," while initial State is ",initialState)

    switch(type){
        case REQUEST_SENT: 
            console.log("REQUEST_SENT called")
            return {
                ...state,
                isLoading : true,
            }
        case LOGIN_USER:
            console.log("LOGIN_USER called")
            return {
                ...state,
                loginToken : payload.token,
                user : payload.user,
                isLoading : false, 
            }
        case LOGOUT_USER:
            console.log("LOGOUT_USER called")
            return {
                ...state,
                loginToken : 0,
                isLoading : false
            }
        case SIGNUP_USER:
            console.log("SIGNUP_USER called")
            return {
                ...state,
                signedUp : payload.signedUp
            }
        case LOGIN_ERROR:
                console.log("LOGIN_ERROR called")
                return {
                    ...state,
                    error : payload
                }
        case SIGNUP_ERROR:
                console.log("SIGNUP_ERROR called")
                return {
                    ...state,
                    error : payload
                }
        default : console.log("DEFAULT called")
                  return state 
    }
}