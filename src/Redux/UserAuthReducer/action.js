import axios from 'axios'

const REQUEST_SENT = "REQUEST_SENT"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_ERROR = "LOGIN_ERROR"
const SIGNUP_ERROR = "SIGNUP_ERROR"


const requestSent = () => ({
    type : REQUEST_SENT
})

const userLogin = (payload) => {
    console.log("userLogin called")
    return {
        type : LOGIN_USER,
        payload : payload 
    }
}

const userLogout = () => {
    console.log("userLogout called")
    return {
        type : LOGOUT_USER,
    }
}

const userSignup = (payload) => {
    console.log("userSignup called")
    return {
        type : SIGNUP_USER,
        payload : payload 
    }
}

const errorLogin = (payload) => {
    console.log("errorLogin called")
    return {
        type : LOGIN_ERROR,
        payload : payload 
    }
}

const errorSignup = (payload) => {
    console.log("errorSignup called")
    return {
        type : SIGNUP_ERROR,
        payload : payload 
    }
}

const loginUser = (payload) => {
    
    console.log(payload," is payload in loginUser")
    
    return dispatch => {
        console.log("Registering Request")
        dispatch(requestSent())
        return axios.post("http://127.0.0.1:5000/login",payload).
        then(res => {
            console.log("login success",res.data)
            return dispatch(userLogin(res.data))
        }).
        catch(err => dispatch(errorLogin(err)))
    }
}


const signupUser = (payload) => {
    
    console.log(payload," is payload in signupUser")
    
    return dispatch => {
        console.log("Registering Request")
        dispatch(requestSent())
        return axios.post("http://127.0.0.1:5000/signup",payload).
        then(res => {
            console.log("signup success",res.data)
            return dispatch(userSignup(res.data))
        }).
        catch(err => dispatch(errorSignup(err)))
    }
}

export {
    REQUEST_SENT,
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER, 
    LOGIN_ERROR, 
    SIGNUP_ERROR,
    loginUser,
    signupUser,
    userLogout
}