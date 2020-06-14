import React, { useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SignIn from './SignIn'
import SignUp from './SignUp'



export default function UserLogin(){
    const [ signUp, setSignUp ] = useState(false)

    return(
        <div>
            <div style={rowFlex}>
                { signUp===false ? <h2 style={headingStyle}>Sign in</h2> : 
                <div style={rowFlex}>
                    <div style={iconStyle} onClick={()=>setSignUp(false)} ><ArrowBackIcon/></div>
                    <h2 style={headingStyle}>Sign up</h2>
                </div>
                }
            </div>
            <div>
                {
                    signUp===false ? 
                    <SignIn changeSignUp={setSignUp}/> :
                    <SignUp changeSignUp={setSignUp}/>
                }
            </div>
        </div>
    )
}

const formStyle = {
    border : 'solid 1px orange',
    height : '100%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
}

const headingStyle = {
    fontWeight : '100'
}

const colStyle = {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
}

const smallText = {
    marginTop : '0.5rem',
    fontSize : '0.7rem',
}

const container = {
    height : '100%',
}

const spanStyle = {
    color : 'blue',
    cursor : 'pointer'
}

const rowFlex = {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
}

const iconStyle = {
    height : '100%',
    display : 'flex',
    alignItems : 'center',
    position : 'relative',
    right : '70px',
    cursor : 'pointer',
    color : 'orange'
}




