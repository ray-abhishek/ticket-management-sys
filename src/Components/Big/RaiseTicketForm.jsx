import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TextField , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addTicket } from '../../Redux/action'
import { useDispatch , useSelector } from "react-redux"

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
    const [ raised , setRaised ] = useState(false)
    const dispatcher = useDispatch()
    const [ titleValue , setTitleValue ] = useState('')
    const [ descValue , setDescValue ] = useState('')
    console.log(location.state," refers to company against which ticket is being raised")
    var todaysDate = new Date()
    todaysDate = todaysDate.toISOString()
    todaysDate = todaysDate.slice(0, todaysDate.lastIndexOf('T'))
    return (
        <div style={formStyle}>
            { raised===false? 
            <form className={classes.root} onSubmit={(e)=>{
              e.preventDefault()
              dispatcher(addTicket({"title":titleValue,
                  "company":location.state[1],
                  "description":descValue,
                  "raisedOn":todaysDate,
                  "status":"Pending"
                }))
              setRaised(true)
            }}>
                <TextField required label="Title" placeholder="Enter Title. . ." value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>
                <TextField disabled label="Company" placeholder="Enter Company. . ." defaultValue={location.state[1]}/>

                <TextField required
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Describe the issue you're facing"
                        variant="outlined"
                        value={descValue} onChange={(e)=>setDescValue(e.target.value)}/>
                <TextField disabled label="Date" defaultValue={todaysDate}/>
                <Button variant="contained" color="secondary" style={{marginTop:'1rem'}} type="submit">
                        R E G I S T E R
                </Button>
            </form> :
            <div style={{marginTop:'20px'}}>Ticket has been logged. Thanks!
              <Button style={{display:'block'}} variant="outlined" color="primary" onClick={()=>{
                          setRaised(false)
                          setTitleValue('')
                          setDescValue('')
                          }}>
                Create Another Ticket
              </Button>
            </div>
            }
        </div>
    )
}

const formStyle = {
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center'
}