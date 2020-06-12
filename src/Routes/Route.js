import React from 'react'
import { Switch } from '@material-ui/core'
import Home from '../Components/Big/Home'
import TicketPage from '../Components/Big/TicketPage'
//import Dashboard from '../Components/Big/Dashboard'

export default function Routing(){
    
    return (
        <Switch>
            <Route path="/" exact render={(props)=><Home {...props}/>}/>

            <Route path="/track" exact render={(props)=><TicketPage {...props}/>}/>

            <Route path="/dashboard" exact render={(props)=><Dashboard {...props}/>}/>

        </Switch>
    )
}

const Dashboard = () => <div>DASHBOARD IN PROGRESS</div>

