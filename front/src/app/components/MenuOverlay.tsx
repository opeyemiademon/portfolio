"use client"
import React from 'react'
import NavLink from './NavLink'

const MenuOverlay =({links}:{links:any})=> {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((item:any, index:number)=><li key={index}><NavLink title={item.title} href={item.path}  /></li>)}
    </ul>
  )
}

export default MenuOverlay