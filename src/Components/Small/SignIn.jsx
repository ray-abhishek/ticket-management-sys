import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch , useSelector } from "react-redux"
import { loginUser } from '../../Redux/UserAuthReducer/action'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '30ch',
        margin : '10px'
      },
      display: 'flex',
      flexDirection : 'column',
      margin: '0 auto',
      justifyContent: 'space-evenly',
      alignItems:'center',
      
    },
  }));


export default function SignIn({changeSignUp}){

    const classes = useStyles()
    const [ phone , setPhone ] = useState('')
    const [ password , setPassword ] = useState('')
    const dispatcher = useDispatch()

    return (
        <form className={classes.root} onSubmit={(e)=>{
            e.preventDefault()
            dispatcher(loginUser({"phoneNo":phone,"password":password}))
        }}>
            <TextField required label="Mobile Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <TextField required label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div style={colStyle}>
                <Button type="submit" color="primary" variant="outlined" className="mt-3">Sign In</Button>
                <div style={smallText}>New User? <span onClick={()=>changeSignUp(true)} style={spanStyle}>Sign up!</span></div>
            </div>
        </form>
    )
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


const spanStyle = {
    color : 'blue',
    cursor : 'pointer'
}