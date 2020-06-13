import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function CountChart(props) {
  var { ticketCount, ticketCompany } = props 

  const state = {
    labels: ticketCompany,
    datasets: [
      {
        label: 'Ticket Count',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: ticketCount
      }
    ]
  }

    return (
      <div>
        <Bar
          data={state}
          height={400}
          width={500}
          options={{
            title:{
              display:true,
              text:'Department Wise Ticket Count',
              fontSize:18
            },
            legend:{
              display:false,
              position:'right'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
          }}
        />
      </div>
    );
}