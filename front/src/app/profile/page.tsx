"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import AchievementsSection from '../components/AchievementsSection'

const Page =()=> {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
       <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection/>
        <AchievementsSection />
        <AboutSection />

        <ProjectSection />

        <EmailSection />
   
        </div>
        <Footer />
    </main>
  )
}

export default Page