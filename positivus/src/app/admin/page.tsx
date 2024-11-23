"use client"
import Content from '@/components/Content'
import Event from '@/components/Event'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Profile from '@/components/Profile'
import Sidebar from '@/components/Sidebar'
import Stats from '@/components/Stats'
import Team from '@/components/Team'
import React, { useState } from 'react'

const Page = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div className={` ${darkMode&& 'dark'} font-quicksand`}>
       <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar ={toggleSidebar} />
        
        <Sidebar darkMode={darkMode} isSidebarOpen={isSidebarOpen}   />

        <Main>
            <Content> 
                <Stats darkMode={darkMode} /> 
                <div className="flex flex-col gap-3 lg:flex-row">
                    <Team />
                    <Event />
                </div>
                </Content>
                <Profile />
        </Main>
         </div>
  )
}

export default Page