import React from 'react'


export default function WelcomeUser({data}){


    return (
        <div style={colStyle}>
            Welcome back, <br/>{data[1]}
        </div>
        
    )
}

const colStyle = {
    display: 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '2rem',
    height : '100%',
    border : 'solid 1px orange',
}
