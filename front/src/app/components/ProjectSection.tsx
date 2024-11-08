"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"


const projectsData = [
    {id:1, title: "React Portfolio Website", description:'Project 1 description', image:'/images/c.jpg', tag:["All", "Web"], gitUrl:'', previewUrl:''},

    {id:2, title: "Photography Portfolio Website", description:'Project 2 description', image:'/images/b.jpg', tag:["All", "Web"], gitUrl:'', previewUrl:''},

    {id:3, title: "Ecommerce Application", description:'Project 3 description', image:'/images/c.jpg', tag:["All", "Web"],  gitUrl:'', previewUrl:''},

    {id:4, title: "React Portfolio Website", description:'Project 4 description', image:'/images/d.jpg', tag:["All", "Web"], gitUrl:'', previewUrl:''},

    {id:5, title: "React Firebase Template", description:'Project 5 description', image:'/images/c.jpg', tag:["All", "Mobile"], gitUrl:'', previewUrl:''},

    {id:6, title: "Full-stack Roadmap", description:'Project 6 description', image:'/images/b.jpg', tag:["All", "Mobile"], gitUrl:'/', previewUrl:'/'}
]
const ProjectSection =()=> {
const ref = useRef(null)
    const [tag, setTag] = useState('All')
const isInView = useInView(ref, {once:true})
    const handleTag = (newTag:string)=>{
        setTag(newTag)
    }

    const filterProjects = projectsData.filter((project:any)=>project.tag.includes(tag))

const variant = {
    initial:{y:50, opacity:0},
    animate:{y:0, opacity:1 }
}
  return (
    <section >
    <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>

    <div className='text-white flex flex-row justify-center gap-2 py-6'>
       <ProjectTag onClick={handleTag} name="All" isSelected={tag==="All"}  />
       
       <ProjectTag onClick={handleTag} name="Web" 
       isSelected={tag==="Web"}  />

       <ProjectTag onClick={handleTag} name="Mobile" isSelected={tag==="Mobile"}  />
          </div>

    <ul ref={ref}
     className='grid md:grid-cols-3 gap-8 md:gap-12'>{filterProjects.map((list:any, id:number)=>(
        <motion.li 
        key={id}
        variants={variant}
         initial="initial"
          animate={isInView ?"animate":"initial"}
          transition={{duration:0.3, delay:id * 0.4}}
          >
        <ProjectCard 
     key={id} 
     title={list.title} 
     description={list.description} 
     imgUrl={list.image} 
     gitUrl={list.gitUrl}
      previewUrl={list.previewUrl}
        />
        </motion.li>
        ))}
        </ul>
    </section>
    
  )
}

export default ProjectSection