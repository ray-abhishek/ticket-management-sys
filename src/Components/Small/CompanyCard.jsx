import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      width: 150,
      height: 175,
      margin: 10,
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f7f7f7'
    },
    media: {
      height: 150,
    },

  });


export default function CompanyCard({company}){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardContent>
                
                <Typography variant="h5" component="h2">
                    {company[1]}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={{pathname: "/raise",
                       state : company}}>
                           
                <Button size="small" color="secondary">
                    Raise Ticket
                </Button>
            </Link>
            </CardActions>
        </Card>
    )
}