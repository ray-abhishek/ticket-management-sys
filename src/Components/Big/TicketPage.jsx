import React, { useEffect } from 'react'
import { fetchTickets } from '../../Redux/action'
import { useSelector } from 'react-redux'

import TicketsTable from '../Small/TicketsTable'

export default function TicketPage(){

    useEffect(()=>{
        console.log("Fetching Tickets through useEffect")
        fetchTickets()
    }, [])

    const ticketData = useSelector(state => state.tickets )

    return (
        <div>
            <TicketsTable tickets={ticketData}/>
        </div>
    )
    
}