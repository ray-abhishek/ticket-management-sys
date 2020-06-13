import React, { useEffect } from 'react'
import { fetchStatus } from '../../Redux/action'
import { useSelector , useDispatch } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart';
import Legend from '../Small/Legend'

export default function Dashboard(){

    const dispatcher = useDispatch()
    useEffect(()=>{
        console.log("Fetching Companies through useEffect")
        dispatcher(fetchStatus())
    }, [])

    const statuses = useSelector(state => state.status )
    console.log(statuses," are status of tickets category wise")
    var onhold = 0, pending = 0, solved = 0
    statuses.forEach(status => {
        if (status[1]==='On Hold')
            onhold = status[0] 
        else if(status[1]==='Pending')
            pending = status[0]
        else solved = status[0]
    })
    return (
        <div style={pieContainer}>
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
    )
}

const pieStyle = {
    width : '200px',
    height : '200px'
}

const pieContainer = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
}