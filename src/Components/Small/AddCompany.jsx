import React from 'react'
import {  Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      width: 150,
      margin: 10,
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between',
    },
    media: {
      height: 150,
    },

  });


export default function AddCompany({company}){
    const classes = useStyles();

    return (
        
            <Link to="/newcompany">
                           
                <Button color="secondary" variant="outlined">
                    New Department
                </Button>
            </Link>
            
    )
}