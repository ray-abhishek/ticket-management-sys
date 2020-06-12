import React from 'react'
import { Card, CardContent, Typography, CardActions } from '@material-ui/core'

export default function CompanyCard({company}){


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