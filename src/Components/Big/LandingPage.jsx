import React from 'react'
import UserLogin from '../Small/UserLogin'
import { useSelector } from 'react-redux'
import WelcomeUser from '../Small/WelcomeUser'

export default function LandingPage(){

    const { user, loginToken, error } = useSelector(state => state.auth )
    console.log(user," is user after login")
    console.log(loginToken," is token")
    console.log(error, " is error")
    return(
        <div className="row mt-4">
            <div className="col-sm-12 col-md-6">
                {
                    error==="false" && loginToken.length===0 ?
                    <UserLogin /> : <WelcomeUser data={user}/>
                }
            </div>
            <div className="col-sm-12 mt-sm-5 mt-md-0 col-md-6" >
                <img src="/boston-public-library-unsplash.jpg" alt="img" style={imgStyle}/>
            </div>
        </div>
    )
}

const imgStyle = {
    maxWidth : '100%',
}