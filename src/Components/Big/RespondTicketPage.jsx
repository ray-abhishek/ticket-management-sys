import React from 'react'
import { useLocation } from 'react-router-dom'
import { TextField , Button, MenuItem, Grid } from '@material-ui/core';
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

const statuses = [
    "Pending",
    "On Hold",
    "Solved"
]

export default function RespondTicketPage(){

    const classes = useStyles()
    const location = useLocation()
    
    
    console.log(location.state," refers to ticket for which response page has been loaded")
    const todaysDate = new Date()
    const { id, title, description, date, status, company} = location.state
    const [ currentStatus, setCurrentStatus ] = React.useState(status);
    const handleChange = (event) => {
        setCurrentStatus(event.target.value);
    };
    return (
        <div>
            <form className={classes.root}>
                <TextField disabled label="Title" placeholder="Enter Title. . ." defaultValue={title}/>
                <TextField disabled label="Company" placeholder="Enter Company. . ." defaultValue={company}/>
                <div className="MuiTextField-root">
                    <h5>Comments</h5>
                    <p>{description}</p>
                </div>
                <TextField required
                        label="Additional Comments"
                        multiline
                        rows={4}
                        variant="outlined"
                        />
                <Grid style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'50ch'}}>
                    <Grid item xs={6}>
                <TextField disabled label="Raised On" defaultValue={date} style={{width:'20ch'}}/></Grid>
                <Grid item xs={6}>
                <TextField disabled label="Date" defaultValue={todaysDate.toLocaleDateString()} style={{width:'20ch'}}/>
                </Grid>
                </Grid>
                <TextField
                    select
                    label="STATUS"
                    value={currentStatus}
                    defaultValue = {status}
                    onChange={handleChange}
                    helperText="Please select Status"
                    >
                {statuses.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
                </TextField>
                <Button variant="contained" color="secondary" style={{marginTop:'1rem'}}>
                        S U B M I T
                </Button>
            </form>
        </div>
    )
    
}
