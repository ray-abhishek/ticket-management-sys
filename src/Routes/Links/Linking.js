import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const navlinks = [
    {
        "link":"Departments",
        "route":"/departments"
    },
    {
        "link":"Track",
        "route":"/track"
    },
    {
        "link":"Dashboard",
        "route":"/dashboard"
    }
]

const listitems = navlinks.map(navlink => {
    return <li className="nav-item">
        <Link className="nav-link mr-5 font-weight-bold" to={navlink.route}>{navlink.link}</Link>
    </li>
}) 

export default function Linking(){
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light  rounded" style={navbarStyle}>

            <Link className="navbar-brand font-weight-bold d-flex  ml-md-5 align-items-center" to="/">Citizen Issue Tracker</Link>
            
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navToggler">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 p-4">
                    {
                        listitems.map(listitem=>listitem)
                    }
                </ul>
            </div>

        </nav>
    )
}

const navbarStyle = {
    backgroundColor : 'white',
    color : 'black'
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