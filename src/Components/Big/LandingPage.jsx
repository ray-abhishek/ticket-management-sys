import React from 'react'
import UserLogin from '../Small/UserLogin'

export default function LandingPage(){


    return(
        <div className="row mt-4">
            <div className="col-sm-12 col-md-6">
                <UserLogin />
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