import React, { useEffect } from 'react'
import { fetchTickets } from '../../Redux/TicketReducer/action'
import { useDispatch , useSelector } from "react-redux"
import TicketsTable from '../Small/TicketsTable'

export default function TicketPage(){
    const dispatcher = useDispatch()
    const { user , loginToken } = useSelector(state => state.auth)
    useEffect(()=>{
        console.log("Fetching Tickets through useEffect")
        
        dispatcher(fetchTickets({'user':user}))
    }, [])

    const ticketData = useSelector(state => state.ticket.tickets )

    return (
        <div style={containterStyle}>
            {loginToken.length>0 ? <TicketsTable tickets={ticketData}/> 
            : <div style={warningStyle}>Please login to view the tickets.</div>}
        </div>
    )
    
}

const containterStyle = {
    padding : 0
}

const warningStyle = {
    width : '100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
}