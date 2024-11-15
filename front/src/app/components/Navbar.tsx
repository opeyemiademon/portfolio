"use client"
import React, {useState} from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const Navbar =()=> {
const [navbarOpen, SetNavbarOpen] =   useState(false)
  
    const navlinks = [
        {title:'About', path:'#about'},
        {title:'Projects', path:'#projects'},
        {title:'Contact', path:'#contact'},
    ]
  return (
    <nav className='fixed mx-auto border border-[#33353F]  top-0 left-0 right-0  z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container lg:py-4 flex-wrap item-center justify-between mx-auto  px-4 py-2'>
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>LOGO </Link>

<div className='mobile-menu block md:hidden '>

{!navbarOpen?<button onClick={()=>SetNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-3 border rounded border-slate-200 hover:text-whiye hover:border-white '><Bars3Icon className='h-5 w-5' /></button>:<button onClick={()=>SetNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-3 border rounded border-slate-200 hover:text-whiye hover:border-white '><XMarkIcon className='h-5 w-5' /></button> }
</div>
            <div className="menu hidden md:block md:w-auto" id="navbar"> 
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                   {navlinks.map((list:any, id:number)=><li key={id}>

                    <NavLink title={list.title} href={list.path} />
                   </li>)}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navlinks} />:null}
    </nav>
  )
}

export default Navbar