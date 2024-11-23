import React from 'react'

const User = () => {
  return (
    <div className='flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300'>

        <img src="/images/staff/user1.png" alt="logo" className='w-14 h-14 rounded-full' />

        <div>
            <h3 className='font-semibold text-2xl'>John Doe</h3>
            <p>Developer</p>
        </div>
    </div>
  )
}

export default User