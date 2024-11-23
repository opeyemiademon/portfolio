import React from 'react'
import { employeeData } from './data'
import Card from './Card'
import Balance from './Balance'

const Stats = ({ darkMode}:any) => {
  return (
    <div className='flex flex-col md:flex-row gap-5'>
        <div className="flex flex-col gap-4 h-full">
            {employeeData.map((list:any, id:number)=>(
                <Card key={id} data={list} />
            ))}
        </div>
        <Balance darkMode ={darkMode} />
    </div>
  )
}

export default Stats