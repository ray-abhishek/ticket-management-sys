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
        <Grid style={navStyle}>
            {navButtons.map(link => {
                return <Link to={link.Route} style={linkStyle}>
                    {link.Name}
                    </Link>
            })}
        </Grid>
    )
}

const navStyle = {
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    maxWidth : '400px',
    margin: '0 auto',
    fontSize : '2rem'
}

const linkStyle = {
    textDecoration : 'None',
    color : 'purple',
    fontWeight : 'bolder'
}