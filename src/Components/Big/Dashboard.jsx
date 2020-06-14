import React, { useEffect, useState } from 'react'
import { fetchStatus , fetchCount } from '../../Redux/TicketReducer/action'
import { useSelector , useDispatch } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart';
//import BarChart from 'react-bar-chart';
import CountChart from '../Small/CountChart'
import Legend from '../Small/Legend'

export default function Dashboard(){

    const dispatcher = useDispatch()
    useEffect(()=>{
        console.log("Fetching Companies through useEffect")
        dispatcher(fetchStatus())
        dispatcher(fetchCount())
    }, [])
    const margin = {top: 20, right: 20, bottom: 30, left: 30};
    const statuses = useSelector(state => state.ticket.status )
    const counts = useSelector(state => state.ticket.count )
    console.log(counts, " company wise ticket count")
    console.log(statuses," are status of tickets category wise")
    var onhold = 0, pending = 0, solved = 0
    statuses.forEach(status => {
        if (status[1]==='On Hold')
            onhold = status[0] 
        else if(status[1]==='Pending')
            pending = status[0]
        else solved = status[0]
    })
    var countData = [], companyData = []
    counts.forEach(count => {
        countData.push(count[0])
        companyData.push(count[1])
    })
    const [ width , setWidth ] = useState(500)
    useEffect(()=>{
        
    }, [])

    return (
        <div className="row">
            <div style={pieContainer} className="col-sm-12 col-md-6 mt-sm-5">
            <h5>Status Wise Ticket Count</h5>
            <div style={rowStyle}>
            <div style={pieStyle}>
            <PieChart
                data={[
            { title: 'On Hold', value: onhold, color: '#E38627' },
            { title: 'Pending', value: pending, color: '#C13C37' },
            { title: 'Solved', value: solved, color: 'green'},
                    ]} 
                label={ ( {dataEntry} ) => dataEntry.value }
                    />

            </div>
            <Legend />
            </div>
            </div>
            <div style={barContainer} className="col-sm-12 col-md-6">
                    <CountChart ticketCount={countData} ticketCompany={companyData}/>
            </div>
        </div>
    )
}

const pieStyle = {
    width : '200px',
    height : '200px'
}

const pieContainer = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-evenly',
    alignItems : 'center'
}

const rowStyle = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
}

const barContainer = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : '1.5rem',
}



const dashboardStyle = {
    display : 'flex',
    justifyContent : 'space-evenly'
}