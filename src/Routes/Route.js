import React from 'react'
import Departments from '../Components/Big/Departments'
import TicketPage from '../Components/Big/TicketPage'
import RaiseTicketForm from '../Components/Big/RaiseTicketForm'
import RespondTicketPage from '../Components/Big/RespondTicketPage'
import Dashboard from '../Components/Big/Dashboard'
import CreateCompany from '../Components/Big/CreateCompany'
import { Switch , Route } from 'react-router'
import LandingPage from '../Components/Big/LandingPage'

export default function Routing(){
    
    return (
        <Switch>
            <Route path="/" exact render={(props)=><LandingPage {...props}/>}/>

            <Route path="/departments" exact render={(props)=><Departments {...props}/>}/>

            <Route path="/track" exact render={(props)=><TicketPage {...props}/>}/>

            <Route path="/dashboard" exact render={(props)=><Dashboard {...props}/>}/>

            <Route path="/raise" exact render={(props) => <RaiseTicketForm {...props}/> } />

            <Route path="/respond" exact render={(props) => <RespondTicketPage {...props}/> } />

            <Route path="/newcompany" exact render={(props) => <CreateCompany {...props}/> } />

        </Switch>
    )
}

//const Dashboard = () => <div>DASHBOARD IN PROGRESS</div>

