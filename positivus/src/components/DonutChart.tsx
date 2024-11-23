import React from 'react'
import Chart from 'react-apexcharts'
const DonutChart = ({darkMode}:{darkMode:boolean}) => {

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
    <div className='py-6 bg-white rounded-lg p-5 flex dark:bg-gray-600 items-center justify-center'>
      
      <Chart options={chartOptions.options} series={chartOptions.series} type="donut" height={350} />
      </div>
  )
}

export default DonutChart