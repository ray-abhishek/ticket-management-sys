import React from 'react'
import Home from '../Components/Big/Home'
import TicketPage from '../Components/Big/TicketPage'
import RaiseTicketForm from '../Components/Big/RaiseTicketForm'
import RespondTicketPage from '../Components/Big/RespondTicketPage'
import Dashboard from '../Components/Big/Dashboard'
import CreateCompany from '../Components/Big/CreateCompany'
import { Switch , Route } from 'react-router'

export default function Routing(){
    
    return (
        <Switch>
            <Route path="/" exact render={(props)=><Home {...props}/>}/>

            <Route path="/track" exact render={(props)=><TicketPage {...props}/>}/>

            <Route path="/dashboard" exact render={(props)=><Dashboard {...props}/>}/>

            <Route path="/raise" exact render={(props) => <RaiseTicketForm {...props}/> } />

            <Route path="/respond" exact render={(props) => <RespondTicketPage {...props}/> } />

            <Route path="/newcompany" exact render={(props) => <CreateCompany {...props}/> } />

        </Switch>
    )
}

//const Dashboard = () => <div>DASHBOARD IN PROGRESS</div>

