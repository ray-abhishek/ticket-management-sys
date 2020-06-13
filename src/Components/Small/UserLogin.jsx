import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch , useSelector } from "react-redux"


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '30ch',
      },
      display: 'flex',
      flexDirection : 'column',
      margin: '0 auto',
      justifyContent: 'space-evenly',
      alignItems:'center',
      
    },
  }));

export default function UserLogin(){
    const classes = useStyles()
    const [ phone , setPhone ] = useState('')
    const [ password , setPassword ] = useState('')

    return(
        <div style={formStyle}>
            <h2 style={headingStyle}>Sign in</h2>
            <form className={classes.root} onSubmit={(e)=>{
                e.preventDefault()
                //dispatcher(loginUser({"phoneNo":phone,"password":password}))
            }}>
                <TextField required label="Mobile Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <TextField required label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button type="submit" color="primary" variant="outlined">Sign In</Button>
            </form>
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