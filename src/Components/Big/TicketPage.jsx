import React, { useEffect } from 'react'
import { fetchTickets } from '../../Redux/action'
import { useDispatch , useSelector } from "react-redux"
import TicketsTable from '../Small/TicketsTable'

export default function TicketPage(){
    const dispatcher = useDispatch()
    useEffect(()=>{
        console.log("Fetching Tickets through useEffect")
        dispatcher(fetchTickets())
    }, [])

    const ticketData = useSelector(state => state.tickets )

    return (
        <div style={containterStyle}>
            <TicketsTable tickets={ticketData}/>
        </div>
    )
    
}

const containterStyle = {
    padding : 0
}