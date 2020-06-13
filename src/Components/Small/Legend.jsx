import React from 'react'
import './LegendCSS.css'

export default function Legend(){

    return (
        <div className="legendContainer">
            <div className="rowStyle">
                <div style={{backgroundColor:'green'}} className="boxStyle"></div>
                <h5>Solved</h5>
            </div>
            <div className="rowStyle">
                <div style={{backgroundColor:'#C13C37'}} className="boxStyle"> </div>
                <h5>Pending</h5>
            </div>
            <div className="rowStyle">
                <div style={{backgroundColor:'#E38627'}} className="boxStyle"> </div>
                <h5>On Hold</h5>
            </div>
        </div>
    )
}

