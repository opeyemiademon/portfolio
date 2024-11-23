import React from 'react'

import Chart from 'react-apexcharts'
const BarChart = ({darkMode}:any) => {

    const  chartOptions = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          labels: ["Desktop", "tablet", "Mobile"],
            colors:["#FF5733", "#33FF57", "#3357FF"],
            datalabels:{
              style:{
                  colors:["#dddddd"]
              }
             },
            
             reponsive:[
              {
                breakpoint:480,
                options:{
                  chart:{
                    width:200
                  },
                  legend:{
                    position:"bottom"
                  }
                }
              }
             ],
        },
        series: [44,55,41],
      }


  return (
    <div className='px-2 pb-0'>
     <Chart options={chartOptions.options} series={chartOptions.series} type="donut" height={350} />
    </div>
  )
}

export default BarChart