import React from 'react'
import Title from './Title'
import { users } from './data'
import Member from './Member'

const Team = () => {
  return (
    <div className='bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5 '>
        <Title>Team</Title>
        {users.map((user:any, id:number)=>(
            <Member key={id} user={user} />
        ))}
    </div>
  )
}

export default Team