import React, { useState } from 'react'
import { TextField , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addCompany } from '../../Redux/action'
import { useDispatch } from "react-redux"

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

export default function CreateCompany(){

    const classes = useStyles()
    const dispatcher = useDispatch()
    const [ titleValue , setTitleValue ] = useState('')
    const [ descValue , setDescValue ] = useState('')

    return (
        <div>
            <form className={classes.root} onSubmit={(e)=>{
              e.preventDefault()
              dispatcher(addCompany({"name":titleValue,
                  "description":descValue,
                }))
            }}>
                <TextField required label="Department" placeholder="Enter Department Name. . ." value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>

                <TextField required
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Describe the responsibilities of the Department"
                        variant="outlined"
                        value={descValue} onChange={(e)=>setDescValue(e.target.value)}/>
  
                <Button variant="contained" color="secondary" style={{marginTop:'1rem'}} type="submit">
                        CREATE DEPARTMENT
                </Button>
            </form>
        </div>
    )
}