import React from 'react'
import { useLocation } from 'react-router-dom'
import { TextField , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
      display: 'flex',
      flexDirection : 'column',
      margin: '0 auto',
      justifyContent: 'center',
      alignItems:'center'
    },
  }));

export default function RaiseTicketForm(){

    const classes = useStyles()
    const location = useLocation()
    console.log(location.state," refers to company against which ticket is being raised")
    const date = new Date()
    return (
        <div>
            <form className={classes.root}>
                <TextField required label="Title" placeholder="Enter Title. . ."/>
                <TextField disabled label="Company" placeholder="Enter Company. . ." defaultValue={location.state.name}/>

                <TextField required
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Describe the issue you're facing"
                        variant="outlined"
                        />
                <TextField disabled label="Date" defaultValue={date.toLocaleDateString()}/>
                <Button variant="contained" color="secondary" style={{marginTop:'1rem'}}>
                        R E G I S T E R
                </Button>
            </form>
        </div>
    )
}