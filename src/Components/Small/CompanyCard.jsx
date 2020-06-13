import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      width: 150,
      margin: 10,
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between',
      background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
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
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Company
                </Typography>
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