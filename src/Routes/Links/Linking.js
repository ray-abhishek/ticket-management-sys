import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const navButtons = [
    {
        "Name":"Home",
        "Route":"/"
    },
    {
        "Name":"Track",
        "Route":"/track"
    },
    {
        "Name":"Dashboard",
        "Route":"/dashboard"
    }
]

export default function Linking(){
    
    return (
        <Grid>
            {navButtons.map(link => {
                return <Link to={link.Route}>
                    {link.Name}
                    </Link>
            })}
        </Grid>
    )
}