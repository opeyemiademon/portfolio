'use client'
import React from 'react'
import { Links } from './data'
import ListItems from './ListItems'

const Sidebar = ({darkMode, isSidebarOpen}:{darkMode:boolean, isSidebarOpen:boolean}) => {
  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${darkMode && 'dark'} ${isSidebarOpen?'translate-x-0':'-translate-x-full'}`}>


    <div className='h-full px-3 pb-4 overflow-y-auto'>
      <ul className='space-y-2 font-medium'>
        {Links.map((ls:any, id:number)=>
          <ListItems key={id} {...ls} />
        )}
      </ul>
    </div>
    </aside>
  )
}

export default Sidebar