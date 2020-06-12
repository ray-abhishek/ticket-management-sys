import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: 150,
      margin: 10,
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between'
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
                    {company.name}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                    Raise Ticket
            </Button>
            </CardActions>
        </Card>
    )
}